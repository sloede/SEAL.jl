
module SchemeType
@enum SchemeTypeEnum::UInt8 none=0 BFV=1 CKKS=2
end

mutable struct EncryptionParameters <: SEALObject
  handle::Ptr{Cvoid}

  function EncryptionParameters(scheme::SchemeType.SchemeTypeEnum)
    handleref = Ref{Ptr{Cvoid}}(C_NULL)
    retval = ccall((:EncParams_Create1, libsealc), Clong,
                   (UInt8, Ref{Ptr{Cvoid}}),
                   scheme, handleref)
    @check_return_value retval
    return EncryptionParameters(handleref[])
  end

  function EncryptionParameters(handle::Ptr{Cvoid})
    x = new(handle)
    finalizer(x) do x
      # @async println("Finalizing $x at line $(@__LINE__).")
      ccall((:EncParams_Destroy, libsealc), Clong, (Ptr{Cvoid},), x)
    end
    return x
  end
end

function get_poly_modulus_degree(enc_param::EncryptionParameters)
  degree = Ref{UInt64}(0)
  retval = ccall((:EncParams_GetPolyModulusDegree, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{UInt64}),
                 enc_param, degree)
  @check_return_value retval
  return Int(degree[])
end

function set_poly_modulus_degree!(enc_param::EncryptionParameters, degree)
  retval = ccall((:EncParams_SetPolyModulusDegree, libsealc), Clong,
                 (Ptr{Cvoid}, UInt64),
                 enc_param, degree)
  @check_return_value retval
  return enc_param
end

function set_coeff_modulus!(enc_param::EncryptionParameters, coeff_modulus)
  coeff_modulus_ptrs = Ptr{Cvoid}[handle(c) for c in coeff_modulus]
  retval = ccall((:EncParams_SetCoeffModulus, libsealc), Clong,
                 (Ptr{Cvoid}, UInt64, Ref{Ptr{Cvoid}}),
                 enc_param, length(coeff_modulus), coeff_modulus_ptrs)
  @check_return_value retval
  return enc_param
end

function coeff_modulus(enc_param::EncryptionParameters)
  len = Ref{UInt64}(0)

  # First call to obtain length (modulus result pointer is null)
  retval = ccall((:EncParams_GetCoeffModulus, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{UInt64}, Ptr{Cvoid}),
                 enc_param, len, C_NULL)
  @check_return_value retval

  # Second call to obtain modulus
  modulusptrs = Vector{Ptr{Cvoid}}(undef, len[])
  retval = ccall((:EncParams_GetCoeffModulus, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{UInt64}, Ref{Ptr{Cvoid}}),
                 enc_param, len, modulusptrs)
  @check_return_value retval

  modulus = Modulus[Modulus(ptr) for ptr in modulusptrs]
  return modulus
end

function scheme(enc_param::EncryptionParameters)
  scheme = Ref{UInt8}(0)
  retval = ccall((:EncParams_GetScheme, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{UInt8}),
                 enc_param, scheme)
  @check_return_value retval
  return SchemeType.SchemeTypeEnum(scheme[])
end

function plain_modulus(enc_param::EncryptionParameters)
  handleref = Ref{Ptr{Cvoid}}(C_NULL)
  retval = ccall((:EncParams_GetPlainModulus, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{Ptr{Cvoid}}),
                 enc_param, handleref)
  @check_return_value retval
  return Modulus(handleref[], destroy_on_gc=false)
end

