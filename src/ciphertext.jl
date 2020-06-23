
mutable struct Ciphertext
  handle::Ptr{Cvoid}

  function Ciphertext()
    handleref = Ref{Ptr{Cvoid}}(C_NULL)
    retval = ccall((:Ciphertext_Create1, libsealc), Clong,
                   (Ptr{Cvoid}, Ref{Ptr{Cvoid}}),
                   C_NULL, handleref)
    @check_return_value retval
    return Ciphertext(handleref[])
  end

  function Ciphertext(handle::Ptr{Cvoid})
    x = new(handle)
    finalizer(x) do x
      # @async println("Finalizing $x at line $(@__LINE__).")
      ccall((:Ciphertext_Destroy, libsealc), Clong,
            (Ptr{Cvoid},),
            x.handle)
    end
    return x
  end
end

function scale(encrypted::Ciphertext)
  scale_ = Ref{Cdouble}(0)
  retval = ccall((:Ciphertext_Scale, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{Cdouble}),
                 encrypted.handle, scale_)
  @check_return_value retval
  return Float64(scale_[])
end
