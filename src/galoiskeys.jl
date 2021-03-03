
"""
    GaloisKeys

Stores Galois keys generated by a `KeyGenerator` instance.

See also: [`KeyGenerator`](@ref)
"""
mutable struct GaloisKeys <: SEALObject
  handle::Ptr{Cvoid}

  function GaloisKeys()
    handleref = Ref{Ptr{Cvoid}}(C_NULL)
    # GaloisKeys are created as KSwitchKeys since they share the same data
    retval = ccall((:KSwitchKeys_Create1, libsealc), Clong,
                   (Ref{Ptr{Cvoid}},),
                   handleref)
    @check_return_value retval
    return GaloisKeys(handleref[])
  end

  function GaloisKeys(handle::Ptr{Cvoid})
    object = new(handle)
    finalizer(destroy, object)
    return object
  end
end

function destroy(object::GaloisKeys)
  if isallocated(object)
    ccall((:KSwitchKeys_Destroy, libsealc), Clong, (Ptr{Cvoid},), object)
  end
end

function parms_id(key::GaloisKeys)
  parms_id = zeros(UInt64, 4)
  retval = ccall((:KSwitchKeys_GetParmsId, libsealc), Clong,
                 (Ptr{Cvoid}, Ref{UInt64}),
                 key, parms_id)
  @check_return_value retval
  return parms_id
end
