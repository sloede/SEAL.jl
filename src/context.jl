
mutable struct SEALContext <: SEALObject
  handle::Ptr{Cvoid}

  function SEALContext(enc_param::EncryptionParameters;
                       expand_mod_chain=true, sec_level=SecLevelType.tc128)
    handleref = Ref{Ptr{Cvoid}}(C_NULL)
    retval = ccall((:SEALContext_Create, libsealc), Clong,
                   (Ptr{Cvoid}, UInt8, Cint, Ref{Ptr{Cvoid}}),
                   enc_param, expand_mod_chain, sec_level, handleref)
    @check_return_value retval
    return SEALContext(handleref[])
  end

  function SEALContext(handle::Ptr{Cvoid})
    x = new(handle)
    finalizer(x) do x
      # @async println("Finalizing $x at line $(@__LINE__).")
      ccall((:SEALContext_Destroy, libsealc), Clong, (Ptr{Cvoid},), x)
    end
    return x
  end
end

function first_parms_id(context::SEALContext)
  parms_id = zeros(UInt64, 4)
  retval = ccall((:SEALContext_FirstParmsId, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{UInt64}),
                 context, parms_id)
  @check_return_value retval
  return parms_id
end

function get_context_data(context::SEALContext, parms_id::DenseVector{UInt64})
  handleref = Ref{Ptr{Cvoid}}(C_NULL)
  retval = ccall((:SEALContext_GetContextData, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{UInt64}, Ref{Ptr{Cvoid}}),
                 context, parms_id, handleref)
  @check_return_value retval
  return ContextData(handleref[], destroy_on_gc=false)
end

function key_context_data(context::SEALContext)
  handleref = Ref{Ptr{Cvoid}}(C_NULL)
  retval = ccall((:SEALContext_KeyContextData, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{Ptr{Cvoid}}),
                 context, handleref)
  @check_return_value retval
  return ContextData(handleref[], destroy_on_gc=false)
end

mutable struct ContextData <: SEALObject
  handle::Ptr{Cvoid}

  function ContextData(handle::Ptr{Cvoid}; destroy_on_gc=true)
    x = new(handle)
    if destroy_on_gc
      finalizer(x) do x
        # @async println("Finalizing $x at line $(@__LINE__).")
        ccall((:ContextData_Destroy, libsealc), Clong, (Ptr{Cvoid},), x)
      end
    end
    return x
  end
end

function chain_index(context_data::ContextData)
  index = Ref{UInt64}(0)
  retval = ccall((:ContextData_ChainIndex, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{UInt64}),
                 context_data, index)
  @check_return_value retval
  return Int(index[])
end

function parms(context_data::ContextData)
  handleref = Ref{Ptr{Cvoid}}(C_NULL)
  retval = ccall((:ContextData_Parms, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{Ptr{Cvoid}}),
                 context_data, handleref)
  @check_return_value retval
  return EncryptionParameters(handleref[])
end

function total_coeff_modulus_bit_count(context_data::ContextData)
  bit_count = Ref{Cint}(0)
  retval = ccall((:ContextData_TotalCoeffModulusBitCount, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{Cint}),
                 context_data, bit_count)
  @check_return_value retval
  return Int(bit_count[])
end
