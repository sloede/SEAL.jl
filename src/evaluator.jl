
mutable struct Evaluator <: SEALObject
  handle::Ptr{Cvoid}

  function Evaluator(context::SEALContext)
    handleref = Ref{Ptr{Cvoid}}(C_NULL)
    retval = ccall((:Evaluator_Create, libsealc), Clong,
                   (Ptr{Cvoid}, Ref{Ptr{Cvoid}}),
                   context, handleref)
    @check_return_value retval
    return Evaluator(handleref[])
  end

  function Evaluator(handle::Ptr{Cvoid})
    x = new(handle)
    finalizer(x) do x
      # @async println("Finalizing $x at line $(@__LINE__).")
      ccall((:Evaluator_Destroy, libsealc), Clong, (Ptr{Cvoid},), x)
    end
    return x
  end
end

function square!(destination::Ciphertext, encrypted::Ciphertext, evaluator::Evaluator)
  retval = ccall((:Evaluator_Square, libsealc), Clong,
                 (Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}),
                 evaluator, encrypted, destination, C_NULL)
  @check_return_value retval
  return destination
end

function relinearize!(destination::Ciphertext, encrypted::Ciphertext, relinkeys::RelinKeys,
                      evaluator::Evaluator)
  retval = ccall((:Evaluator_Relinearize, libsealc), Clong,
                 (Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}),
                 evaluator, encrypted, relinkeys, destination, C_NULL)
  @check_return_value retval
  return destination
end

function relinearize_inplace!(encrypted::Ciphertext, relinkeys::RelinKeys, evaluator::Evaluator)
  return relinearize!(encrypted, encrypted, relinkeys, evaluator)
end

function rescale_to_next!(destination::Ciphertext, encrypted::Ciphertext, evaluator::Evaluator)
  retval = ccall((:Evaluator_RescaleToNext, libsealc), Clong,
                 (Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}),
                 evaluator, encrypted, destination, C_NULL)
  @check_return_value retval
  return destination
end

function rescale_to_next_inplace!(encrypted::Ciphertext, evaluator::Evaluator)
  return rescale_to_next!(encrypted, encrypted, evaluator)
end

function multiply_plain!(destination::Ciphertext, encrypted::Ciphertext, plain::Plaintext,
                         evaluator::Evaluator)
  retval = ccall((:Evaluator_MultiplyPlain, libsealc), Clong,
                 (Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}),
                 evaluator, encrypted, plain, destination, C_NULL)
  @check_return_value retval
  return destination
end

function multiply_plain_inplace!(encrypted::Ciphertext, plain::Plaintext,
                                  evaluator::Evaluator)
  return multiply_plain!(encrypted, encrypted, plain, evaluator)
end

function multiply!(destination::Ciphertext, encrypted1::Ciphertext, encrypted2::Ciphertext,
                   evaluator::Evaluator)
  retval = ccall((:Evaluator_Multiply, libsealc), Clong,
                 (Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}),
                 evaluator, encrypted1, encrypted2, destination, C_NULL)
  @check_return_value retval
  return destination
end

function multiply_inplace!(encrypted1::Ciphertext, encrypted2::Ciphertext, evaluator::Evaluator)
  return multiply!(encrypted1, encrypted1, encrypted2, evaluator)
end

function mod_switch_to!(destination::Ciphertext, encrypted::Ciphertext,
                        parms_id::DenseVector{UInt64}, evaluator::Evaluator)
  retval = ccall((:Evaluator_ModSwitchTo1, libsealc), Clong,
                 (Ptr{Cvoid}, Ptr{Cvoid}, Ref{UInt64}, Ptr{Cvoid}, Ptr{Cvoid}),
                 evaluator, encrypted, parms_id, destination, C_NULL)
  @check_return_value retval
  return destination
end

function mod_switch_to_inplace!(encrypted::Ciphertext, parms_id::DenseVector{UInt64},
                                evaluator::Evaluator)
  return mod_switch_to!(encrypted, encrypted, parms_id, evaluator)
end

function mod_switch_to!(destination::Plaintext, plain::Plaintext, parms_id::DenseVector{UInt64},
                        evaluator::Evaluator)
  retval = ccall((:Evaluator_ModSwitchTo2, libsealc), Clong,
                 (Ptr{Cvoid}, Ptr{Cvoid}, Ref{UInt64}, Ptr{Cvoid}),
                 evaluator, plain, parms_id, destination)
  @check_return_value retval
  return destination
end

function mod_switch_to_inplace!(plain::Plaintext, parms_id::DenseVector{UInt64},
                                evaluator::Evaluator)
  return mod_switch_to!(plain, plain, parms_id, evaluator)
end

function add!(destination::Ciphertext, encrypted1::Ciphertext, encrypted2::Ciphertext,
              evaluator::Evaluator)
  retval = ccall((:Evaluator_Add, libsealc), Clong,
                 (Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}),
                 evaluator, encrypted1, encrypted2, destination)
  @check_return_value retval
  return destination
end

function add_inplace!(encrypted1::Ciphertext, encrypted2::Ciphertext, evaluator::Evaluator)
  return add!(encrypted1, encrypted1, encrypted2, evaluator)
end

function add_plain!(destination::Ciphertext, encrypted::Ciphertext, plain::Plaintext,
                    evaluator::Evaluator)
  retval = ccall((:Evaluator_AddPlain, libsealc), Clong,
                 (Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}, Ptr{Cvoid}),
                 evaluator, encrypted, plain, destination)
  @check_return_value retval
  return destination
end

function add_plain_inplace!(encrypted::Ciphertext, plain::Plaintext, evaluator::Evaluator)
  return add_plain!(encrypted, encrypted, plain, evaluator)
end
