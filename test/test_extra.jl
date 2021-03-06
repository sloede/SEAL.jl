# Additional tests to cover missing pieces
@testset "additional tests" begin
  @testset "miscellaneous" begin
    @testset "version_{major,minor,patch}" begin
      @test_nowarn version_major()
      @test_nowarn version_minor()
      @test_nowarn version_patch()
      @test_nowarn version()
    end

    @testset "version" begin
      major = version_major()
      minor = version_minor()
      patch = version_patch()
      @test version() == VersionNumber("$major.$minor.$patch")
    end

    @testset "PublicKey" begin
      @test_nowarn PublicKey()
    end

    @testset "SecretKey" begin
      @test_nowarn SecretKey()
    end

    @testset "RelinKeys" begin
      @test_nowarn RelinKeys()
    end

    @testset "GaloisKeys" begin
      @test_nowarn GaloisKeys()
    end

    @testset "Modulus" begin
      @test_nowarn Modulus(0)
      @test_throws ErrorException Modulus(1)
      m = Modulus(0)
      @test value(m) == 0
    end

    @testset "memory_manager_get_pool" begin
      @test_nowarn memory_manager_get_pool()
    end

    @testset "alloc_byte_count" begin
      @test alloc_byte_count(memory_manager_get_pool()) isa Int
    end

    @testset "check_return_value" begin
      @test_throws ErrorException SEAL.check_return_value(0x80004003)
      @test_throws ErrorException SEAL.check_return_value(0x80070057)
      @test_throws ErrorException SEAL.check_return_value(0x8007000E)
      @test_throws ErrorException SEAL.check_return_value(0x8000FFFF)
      @test_throws ErrorException SEAL.check_return_value(0x80131620)
      @test_throws ErrorException SEAL.check_return_value(0x80131509)
      @test_throws ErrorException SEAL.check_return_value(0x11111111)
    end

    @testset "destroy!" begin
      mempool = memory_manager_get_pool()
      @test_nowarn destroy!(mempool)
    end
  end

  @testset "additional CKKS tests" begin
    enc_parms = EncryptionParameters(SchemeType.ckks)
    set_poly_modulus_degree!(enc_parms, 8192)
    set_coeff_modulus!(enc_parms, coeff_modulus_create(8192, [60, 40, 40, 60]))
    context = SEALContext(enc_parms)
    keygen = KeyGenerator(context)
    public_key_ = PublicKey()
    create_public_key!(public_key_, keygen)
    secret_key_ = secret_key(keygen)

    @testset "create_public_key" begin
      @test create_public_key(keygen) isa PublicKey
    end

    @testset "Encryptor" begin
      @test_nowarn Encryptor(context, public_key_, secret_key_)
      @test_nowarn Encryptor(context, public_key_)
      @test_nowarn Encryptor(context, secret_key_)
    end

    @testset "scale/scale! Plaintext" begin
      p = Plaintext()
      @test isapprox(scale(p), 1.0)
      @test_nowarn scale!(p, 2.0^40)
      @test isapprox(scale(p), 2.0^40)
    end

    @testset "create_relin_keys" begin
      @test_nowarn create_relin_keys(keygen)
    end

    @testset "plain_modulus" begin
      @test_nowarn plain_modulus(enc_parms)
    end

    p = Plaintext()
    encoder = CKKSEncoder(context)
    encode!(p, 3.14159265, 2.0^40, encoder) 
    encryptor = Encryptor(context, public_key_)
    evaluator = Evaluator(context)
    relin_keys_ = RelinKeys()
    create_relin_keys!(relin_keys_, keygen)
    @testset "{square,relinearize,rescale_to_next}_inplace!" begin
      c1 = Ciphertext()
      encrypt!(c1, p, encryptor)
      @test_nowarn typeof(square_inplace!(c1, evaluator)) === Ciphertext
      @test_nowarn typeof(relinearize_inplace!(c1, relin_keys_, evaluator)) === Ciphertext
      @test_nowarn typeof(rescale_to_next_inplace!(c1, evaluator)) === Ciphertext
    end

    @testset "multiply_plain_inplace!" begin
      c2 = Ciphertext()
      encrypt!(c2, p, encryptor)
      @test_nowarn multiply_plain_inplace!(c2, p, evaluator)
    end

    @testset "multiply_inplace!" begin
      c3 = Ciphertext()
      c4 = Ciphertext()
      encrypt!(c3, p, encryptor)
      encrypt!(c4, p, encryptor)
      @test_nowarn multiply_inplace!(c3, c4, evaluator)
    end

    @testset "add_inplace!" begin
      c5 = Ciphertext()
      c6 = Ciphertext()
      encrypt!(c5, p, encryptor)
      encrypt!(c6, p, encryptor)
      @test add_inplace!(c5, c6, evaluator) == c5
    end

    @testset "add_plain_inplace!" begin
      c7 = Ciphertext()
      encrypt!(c7, p, encryptor)
      @test_nowarn add_plain_inplace!(c7, p, evaluator)
    end

    galois_keys_ = GaloisKeys()
    create_galois_keys!(galois_keys_, keygen)
    @testset "rotate_vector_inplace!" begin
      c8 = Ciphertext()
      encrypt!(c8, p, encryptor)
      @test rotate_vector_inplace!(c8, 5, galois_keys_, evaluator) == c8
    end

    @testset "complex_conjugate_inplace!" begin
      c9 = Ciphertext()
      encrypt!(c9, p, encryptor)
      @test complex_conjugate_inplace!(c9, galois_keys_, evaluator) == c9
    end

    @testset "negate!" begin
      c10 = Ciphertext()
      c11 = Ciphertext()
      encrypt!(c10, p, encryptor)
      @test negate!(c11, c10, evaluator) == c11
    end

    @testset "negate_inplace!" begin
      c12 = Ciphertext()
      encrypt!(c12, p, encryptor)
      @test negate_inplace!(c12, evaluator) == c12
    end

    @testset "sub!" begin
      c13 = Ciphertext()
      c14 = Ciphertext()
      c15 = Ciphertext()
      encrypt!(c13, p, encryptor)
      encrypt!(c14, p, encryptor)
      @test sub!(c15, c13, c14, evaluator) == c15
    end

    @testset "sub_inplace!" begin
      c16 = Ciphertext()
      c17 = Ciphertext()
      encrypt!(c16, p, encryptor)
      encrypt!(c17, p, encryptor)
      @test sub_inplace!(c16, c17, evaluator) == c16
    end

    @testset "using_keyswitching" begin
      @test using_keyswitching(context) == true
    end

    @testset "Plaintext constructor" begin
      @test Plaintext(8192, 0) isa Plaintext
    end

    @testset "Plaintext equality" begin
      p1 = Plaintext(8192, 0)
      p2 = Plaintext(8192, 0)
      @test p1 == p2
    end

    @testset "Ciphertext constructor" begin
      @test Ciphertext(context) isa Ciphertext
    end

    @testset "reserve! Ciphertext" begin
      c = Ciphertext(context)
      @test reserve!(c, 3) == c
    end

    @testset "encode!" begin
      p2 = Plaintext()
      @test encode!(p2, 17, encoder) == p2
    end
  end

  @testset "additional BFV tests" begin
    enc_parms = EncryptionParameters(SchemeType.bfv)
    poly_modulus_degree = 4096
    set_poly_modulus_degree!(enc_parms, poly_modulus_degree)
    set_coeff_modulus!(enc_parms, coeff_modulus_bfv_default(poly_modulus_degree))
    set_plain_modulus!(enc_parms, 786433)
    context = SEALContext(enc_parms)
    keygen = KeyGenerator(context)
    public_key_ = PublicKey()
    create_public_key!(public_key_, keygen)
    secret_key_ = secret_key(keygen)
    galois_keys_ = GaloisKeys()
    create_galois_keys!(galois_keys_, keygen)
    relin_keys_ = RelinKeys()
    create_relin_keys!(relin_keys_, keygen)

    batch_encoder = BatchEncoder(context)
    slot_count_ = slot_count(batch_encoder)
    encryptor = Encryptor(context, public_key_)
    decryptor = Decryptor(context, secret_key_)
    evaluator = Evaluator(context)

    plain = Plaintext()
    encode!(plain, ones(UInt64, slot_count_), batch_encoder)
    encrypted = Ciphertext()
    encrypt!(encrypted, plain, encryptor)

    @testset "rotate_rows_inplace!" begin
      @test rotate_rows_inplace!(encrypted, 1, galois_keys_, evaluator) == encrypted
    end

    @testset "rotate_columns_inplace!" begin
      @test rotate_columns_inplace!(encrypted, galois_keys_, evaluator) == encrypted
    end
  end
end

