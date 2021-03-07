var documenterSearchIndex = {"docs":
[{"location":"license/#License","page":"License","title":"License","text":"","category":"section"},{"location":"license/","page":"License","title":"License","text":"MIT LicenseCopyright (c) 2020 Michael Schlottke-Lakemper <michael@sloede.com>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.","category":"page"},{"location":"contributing/#Contributing","page":"Contributing","title":"Contributing","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"SEAL.jl is an open-source project and we are very happy to accept contributions from the community. Please feel free to open issues or submit patches (preferably as merge requests) any time. For planned larger contributions, it is often beneficial to get in contact with one of the principal developers first.","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"SEAL.jl and its contributions are licensed under the MIT license (see License). As a contributor, you certify that all your contributions are in conformance with the Developer Certificate of Origin (Version 1.1), which is reproduced below.","category":"page"},{"location":"contributing/#Developer-Certificate-of-Origin-(Version-1.1)","page":"Contributing","title":"Developer Certificate of Origin (Version 1.1)","text":"","category":"section"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"The following text was taken from https://developercertificate.org:","category":"page"},{"location":"contributing/","page":"Contributing","title":"Contributing","text":"Developer Certificate of Origin\nVersion 1.1\n\nCopyright (C) 2004, 2006 The Linux Foundation and its contributors.\n1 Letterman Drive\nSuite D4700\nSan Francisco, CA, 94129\n\nEveryone is permitted to copy and distribute verbatim copies of this\nlicense document, but changing it is not allowed.\n\n\nDeveloper's Certificate of Origin 1.1\n\nBy making a contribution to this project, I certify that:\n\n(a) The contribution was created in whole or in part by me and I\n    have the right to submit it under the open source license\n    indicated in the file; or\n\n(b) The contribution is based upon previous work that, to the best\n    of my knowledge, is covered under an appropriate open source\n    license and I have the right under that license to submit that\n    work with modifications, whether created in whole or in part\n    by me, under the same open source license (unless I am\n    permitted to submit under a different license), as indicated\n    in the file; or\n\n(c) The contribution was provided directly to me by some other\n    person who certified (a), (b) or (c) and I have not modified\n    it.\n\n(d) I understand and agree that this project and the contribution\n    are public and that a record of the contribution (including all\n    personal information I submit with it, including my sign-off) is\n    maintained indefinitely and may be redistributed consistent with\n    this project or the open source license(s) involved.","category":"page"},{"location":"reference/#Reference","page":"Reference","title":"Reference","text":"","category":"section"},{"location":"reference/","page":"Reference","title":"Reference","text":"CurrentModule = SEAL","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [SEAL]","category":"page"},{"location":"reference/","page":"Reference","title":"Reference","text":"Modules = [\n  SEAL,\n]","category":"page"},{"location":"reference/#SEAL.CKKSEncoder","page":"Reference","title":"SEAL.CKKSEncoder","text":"CKKSEncoder\n\nA CKKSEncoder provides functionality to convert raw data such as scalars and vectors into Plaintext instances using encode!, and to convert Plaintext elements back to raw data using decode!.\n\nSee also: Plaintext, encode!, decode!\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.Ciphertext","page":"Reference","title":"SEAL.Ciphertext","text":"Ciphertext\n\nA ciphertext element, consisting of two or more polynomials. It can be created from a Plaintext element by encrypting it with an appropriate Encryptor instance. Ciphertext instances should usually not be modified directly by the user but only through the corresponding functions of Evaluator. Decryption is performed via a Decryptor instance, which converts a Ciphertext back to a Plaintext instance.\n\nSee also: Plaintext, Encryptor, Decryptor, Evaluator\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.Decryptor","page":"Reference","title":"SEAL.Decryptor","text":"Decryptor\n\nA Decryptor can be used to decrypt a Ciphertext instance back into a Plaintext instance.\n\nSee also: Plaintext, Ciphertext\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.EncryptionParameters","page":"Reference","title":"SEAL.EncryptionParameters","text":"EncryptionParameters\n\nStores settings for use by the encryption schemes, most importantly the polynomial modulus, the coefficient modulus, and the plaintext modulus. An EncryptionParameters object is required to create a SEALContext instance.\n\nSee also: SEALContext\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.Encryptor","page":"Reference","title":"SEAL.Encryptor","text":"Encryptor\n\nAn Encryptor can be used to encrypt a Plaintext instance, yielding a Ciphertext instance.\n\nSee also: Plaintext, Ciphertext\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.Evaluator","page":"Reference","title":"SEAL.Evaluator","text":"Evaluator\n\nAn Evaluator is used to perform arithmetic and other operations on Ciphertext instances. These include addition, multiplication, relinearization, and modulus switching.\n\nSee also: Ciphertext\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.GaloisKeys","page":"Reference","title":"SEAL.GaloisKeys","text":"GaloisKeys\n\nStores Galois keys generated by a KeyGenerator instance.\n\nSee also: KeyGenerator\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.KeyGenerator","page":"Reference","title":"SEAL.KeyGenerator","text":"KeyGenerator\n\nCan be used to generate a pair of matching secret and public keys. In addition, the KeyGenerator provides functions to obtain relinearization keys (required after multiplication) and Galois keys (needed for rotation).\n\nSee also: SecretKey, PublicKey, RelinKeys\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.Modulus","page":"Reference","title":"SEAL.Modulus","text":"Modulus\n\nRepresents a non-negative integer modulus of up to 61 bits, e.g., for the plain modulus and the coefficient modulus in instances of EncryptionParameters.\n\nSee also: EncryptionParameters\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.Plaintext","page":"Reference","title":"SEAL.Plaintext","text":"Plaintext\n\nA plaintext element, storing data as a polynomial modulo the plaintext modulus. It can be used to create a Ciphertext element by encrypting it with an appropriate Encryptor instance. Decrypting a Ciphertext with a Decryptor instance will again return a Plaintext instance.\n\nSee also: Ciphertext, Encryptor, Decryptor\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.PublicKey","page":"Reference","title":"SEAL.PublicKey","text":"PublicKey\n\nStores a public key generated by a KeyGenerator instance.\n\nSee also: KeyGenerator\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.RelinKeys","page":"Reference","title":"SEAL.RelinKeys","text":"RelinKeys\n\nStores relinearization keys generated by a KeyGenerator instance.\n\nSee also: KeyGenerator\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.SEALContext","page":"Reference","title":"SEAL.SEALContext","text":"SEALContext\n\nHeavyweight class that does validates encryption parameters of type EncryptionParameters and pre-computes and stores several costly pre-computations.\n\nSee also: EncryptionParameters\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.SEALObject","page":"Reference","title":"SEAL.SEALObject","text":"SEALObject\n\nAbstract parent type for all types based on SEAL classes.\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.SecretKey","page":"Reference","title":"SEAL.SecretKey","text":"SecretKey\n\nStores a secret key generated by a KeyGenerator instance.\n\nSee also: KeyGenerator\n\n\n\n\n\n","category":"type"},{"location":"reference/#SEAL.check_return_value","page":"Reference","title":"SEAL.check_return_value","text":"check_return_value(value, location=\"\")\n\nCheck the return value value of calls to C bindings of the SEAL library and throw an exception if there were errors. location can be used to pass information about were the error occurred and will be printed as well.\n\nSee also: @check_return_value\n\n\n\n\n\n","category":"function"},{"location":"reference/#SEAL.decode!-Tuple{DenseArray{Float64,1},Plaintext,CKKSEncoder}","page":"Reference","title":"SEAL.decode!","text":"decode!(destination, plain, encoder)\n\nUse CKKSEncoder instance encoder to convert the Plaintext instance plain back to raw data. The result is stored in the dense vector destination, which must have at least as many elements as there are slots available.\n\nSee also: slot_count\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.destroy!-Tuple{SEALObject}","page":"Reference","title":"SEAL.destroy!","text":"destroy!(object::SEALObject)\n\nCall the corresponding destruction function on object to free up memory and reset object handle to a null pointer. If object is not allocated, destroy! will not do anything.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.encode!","page":"Reference","title":"SEAL.encode!","text":"encode!(destination, data::DenseVector{Float64}, scale, encoder)\nencode!(destination, data::Float64, scale, encoder)\n\nUse CKKSEncoder instance encoder to encode raw data, which can either be a scalar or a dense vector. The result is stored in the Plaintext instance destination using encoding precision scale. Note that if data is a vector, it must have at least as many elements as there are slots available.\n\nSee also: slot_count\n\n\n\n\n\n","category":"function"},{"location":"reference/#SEAL.gethandle-Tuple{SEALObject}","page":"Reference","title":"SEAL.gethandle","text":"gethandle(object::SEALObject)\n\nReturn the raw C pointer to where object resides in memory.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.isallocated-Tuple{SEALObject}","page":"Reference","title":"SEAL.isallocated","text":"isallocated(object::SEALObject)\n\nReturn true if the object is allocated, i.e., if it is not null.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.isnull-Tuple{SEALObject}","page":"Reference","title":"SEAL.isnull","text":"isnull(object::SEALObject)\n\nReturn true if the object handle is a null pointer and false otherwise.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.sethandle!-Tuple{SEALObject,Any}","page":"Reference","title":"SEAL.sethandle!","text":"sethandle!(object::SEALObject, handle)\n\nSet the underlying raw C pointer to where object resides in memory to handle.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.slot_count-Tuple{CKKSEncoder}","page":"Reference","title":"SEAL.slot_count","text":"slot_count(encoder)\n\nReturn the number of available slots for a given encoder, i.e., how many raw data values can be stored and processed simultaneously with the given encryption setup.\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.version-Tuple{}","page":"Reference","title":"SEAL.version","text":"version()\n\nReturn the version of the used SEAL library as a VersionNumber in the format v\"major.minor.patch\"..\n\nSee also: version_major, version_minor, version_patch\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.version_major-Tuple{}","page":"Reference","title":"SEAL.version_major","text":"version_major()\n\nReturn the major version of the used SEAL library as an integer.\n\nSee also: version_minor, version_patch, version\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.version_minor-Tuple{}","page":"Reference","title":"SEAL.version_minor","text":"version_minor()\n\nReturn the minor version of the used SEAL library as an integer.\n\nSee also: version_major, version_patch, version\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.version_patch-Tuple{}","page":"Reference","title":"SEAL.version_patch","text":"version_patch()\n\nReturn the patch version of the used SEAL library as an integer.\n\nSee also: version_major, version_minor, version\n\n\n\n\n\n","category":"method"},{"location":"reference/#SEAL.@check_return_value-Tuple{Any}","page":"Reference","title":"SEAL.@check_return_value","text":"@check_return_value value\n\nCall check_return_value(value, location) with location being a string of the format <filename>:<line_number>.\n\nSee also: check_return_value\n\n\n\n\n\n","category":"macro"},{"location":"#SEAL.jl","page":"Home","title":"SEAL.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SEAL.jl is a Julia package that wraps the Microsoft SEAL library for homomorphic encryption. It supports the Brakerski/Fan-Vercauteren (BFV) and Cheon-Kim-Kim-Song (CKKS, also known as HEAAN in literature) schemes and exposes the homomorphic encryption capabilitites of SEAL in a (mostly) intuitive and Julian way. SEAL.jl is published under the same permissive MIT license as the Microsoft SEAL library.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Currently, SEAL.jl supports all operations that are used in the examples of the SEAL library. This includes encoding and encryption, addition and multiplication, rotation, relinearization and modulus switching for the BFV and CKKS schemes.","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install SEAL.jl, start a Julia REPL, hit ] to enter Julia's Pkg mode, and then execute","category":"page"},{"location":"","page":"Home","title":"Home","text":"(@v1.5) pkg> add SEAL","category":"page"},{"location":"","page":"Home","title":"Home","text":"Alternatively, you can install SEAL.jl by using Pkg directly, i.e., by running","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia -e 'using Pkg; Pkg.add(\"SEAL\")'","category":"page"},{"location":"","page":"Home","title":"Home","text":"SEAL.jl depends on the binary distribution of the SEAL library, which is available as a Julia package SEAL_jll.jl and which is automatically installed as a dependency.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note: Currently SEALjll.jl is not available on Windows, thus SEAL.jl will work only on Linux, MacOS and FreeBSD. Also, SEALjll.jl does not work on 32-bit systems.","category":"page"},{"location":"#Getting-started","page":"Home","title":"Getting started","text":"","category":"section"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"After installation, load SEAL.jl by running","category":"page"},{"location":"","page":"Home","title":"Home","text":"using SEAL","category":"page"},{"location":"","page":"Home","title":"Home","text":"in the REPL. A minimal working example for encrypting an array of integers using the BFV scheme, squaring it, and decrypting it, looks as follows:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using SEAL\n[ Info: Precompiling SEAL [bac81e26-86e4-4b48-8696-7d0406d5dbc1]\n\njulia> parms = EncryptionParameters(SchemeType.bfv)\nEncryptionParameters(Ptr{Nothing} @0x0000000002e1d3a0)\n\njulia> poly_modulus_degree = 4096\n4096\n\njulia> set_poly_modulus_degree!(parms, poly_modulus_degree)\nEncryptionParameters(Ptr{Nothing} @0x0000000002e1d3a0)\n\njulia> set_coeff_modulus!(parms, coeff_modulus_bfv_default(poly_modulus_degree))\nEncryptionParameters(Ptr{Nothing} @0x0000000002e1d3a0)\n\njulia> set_plain_modulus!(parms, plain_modulus_batching(poly_modulus_degree, 20))\nEncryptionParameters(Ptr{Nothing} @0x0000000002e1d3a0)\n\njulia> context = SEALContext(parms)\nSEALContext(Ptr{Nothing} @0x0000000004298440)\n\njulia> keygen = KeyGenerator(context)\nKeyGenerator(Ptr{Nothing} @0x00000000021ef540)\n\njulia> public_key_ = PublicKey()\nPublicKey(Ptr{Nothing} @0x0000000002272610)\n\njulia> create_public_key!(public_key_, keygen)\n\njulia> secret_key_ = secret_key(keygen)\nSecretKey(Ptr{Nothing} @0x0000000001cec2a0)\n\njulia> encryptor = Encryptor(context, public_key_)\nEncryptor(Ptr{Nothing} @0x0000000001cd4480)\n\njulia> evaluator = Evaluator(context)\nEvaluator(Ptr{Nothing} @0x000000000428bdd0)\n\njulia> decryptor = Decryptor(context, secret_key_)\nDecryptor(Ptr{Nothing} @0x00000000037670d0)\n\njulia> batch_encoder = BatchEncoder(context)\nBatchEncoder(Ptr{Nothing} @0x0000000001fb4bd0, SEALContext(Ptr{Nothing} @0x0000000001b87780))\n\njulia> pod_matrix = collect(UInt64, 1:slot_count(batch_encoder));\n\njulia> Int.(vcat(pod_matrix[1:3], pod_matrix[end-3:end]))\n7-element Array{Int64,1}:\n    1\n    2\n    3\n 4093\n 4094\n 4095\n 4096\n\njulia> plain_matrix = Plaintext()\nPlaintext(Ptr{Nothing} @0x00000000042db6e0)\n\njulia> encode!(plain_matrix, pod_matrix, batch_encoder)\nPlaintext(Ptr{Nothing} @0x0000000002ce0370)\n\njulia> encrypted_matrix = Ciphertext()\nCiphertext(Ptr{Nothing} @0x0000000002d91b80)\n\njulia> encrypt!(encrypted_matrix, plain_matrix, encryptor)\nCiphertext(Ptr{Nothing} @0x0000000002d91b80)\n\njulia> add_inplace!(encrypted_matrix, encrypted_matrix, evaluator)\nCiphertext(Ptr{Nothing} @0x0000000002ce1280)\n\njulia> plain_result = Plaintext()\nPlaintext(Ptr{Nothing} @0x0000000004591550)\n\njulia> decrypt!(plain_result, encrypted_matrix, decryptor)\nPlaintext(Ptr{Nothing} @0x0000000004591550)\n\njulia> decode!(pod_matrix, plain_result, batch_encoder);\n\njulia> Int.(vcat(pod_matrix[1:3], pod_matrix[end-3:end]))\n7-element Array{Int64,1}:\n    2\n    4\n    6\n 8186\n 8188\n 8190\n 8192","category":"page"},{"location":"#Examples","page":"Home","title":"Examples","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"As you can see, using homomorphic encryption is quite involved: You need to pick a scheme, provide sensible encryption parameters, encode your raw data into plaintext, encrypt it to ciphertext, perform your arithmetic operations on it, and then decrypt and decode again.  Therefore, before starting to use SEAL.jl for your own applications, it is highly recommended to have a look at the examples in the examples/ directory. Otherwise it will be very likely that you are using SEAL.jl (and SEAL) in a way that is either not secure, will produce unexpected results, or just crashes. The examples included in SEAL.jl follow almost line-by-line the examples provided by the SEAL library. For example, the snippet above is based on the example_batch_encoder() function in examples/2_encoders.jl. The full list of examples is as follows:","category":"page"},{"location":"","page":"Home","title":"Home","text":"SEAL.jl SEAL (C++) Description\nexamples.jl examples.cpp The example runner application\n1_bfv_basics.jl 1_bfv_basics.cpp Encrypted modular arithmetic using the BFV scheme\n2_encoders.jl 2_encoders.cpp Encoding more complex data into Microsoft SEAL plaintext objects\n3_levels.jl 3_levels.cpp Introduces the concept of levels; prerequisite for using the CKKS scheme\n4_ckks_basics.jl 4_ckks_basics.cpp Encrypted real number arithmetic using the CKKS scheme\n5_rotation.jl 5_rotation.cpp Performing cyclic rotations on encrypted vectors in the BFV and CKKS schemes\n6_serialization.jl 6_serialization.cpp Serializing objects in Microsoft SEAL\n7_performance.jl 7_performance.cpp Performance tests","category":"page"},{"location":"","page":"Home","title":"Home","text":"To run the examples, first install SEAL.jl (as shown above) and clone this repository:","category":"page"},{"location":"","page":"Home","title":"Home","text":"git clone https://github.com/JuliaCrypto/SEAL.jl.git","category":"page"},{"location":"","page":"Home","title":"Home","text":"Then, run Julia and include examples/examples.jl before executing seal_examples():","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia --project=. -e 'include(\"SEAL.jl/examples/examples.jl\"); seal_examples()'","category":"page"},{"location":"","page":"Home","title":"Home","text":"You will be shown an interactive prompt that lets you run any of the available examples:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Microsoft SEAL version: 3.6.2\n+---------------------------------------------------------+\n| The following examples should be executed while reading |\n| comments in associated files in examples/.              |\n+---------------------------------------------------------+\n| Examples                   | Source Files               |\n+----------------------------+----------------------------+\n| 1. BFV Basics              | 1_bfv_basics.jl            |\n| 2. Encoders                | 2_encoders.jl              |\n| 3. Levels                  | 3_levels.jl                |\n| 4. CKKS Basics             | 4_ckks_basics.jl           |\n| 5. Rotation                | 5_rotation.jl              |\n| 6. Serialization           | 6_serialization.jl         |\n| 7. Performance Test        | 7_performance.jl           |\n+----------------------------+----------------------------+\n[      0 MB] Total allocation from the memory pool\n\n> Run example (1 ~ 7) or exit (0): ","category":"page"},{"location":"","page":"Home","title":"Home","text":"Since the examples will not create or modify any files, feel free to run them from any directory.","category":"page"},{"location":"#Implementation-strategy","page":"Home","title":"Implementation strategy","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SEAL.jl is work-in-progress, thus only a subset of the many capabilities of the SEAL library are so far supported (PRs are welcome!). In general, SEAL.jl makes use of the C bindings provided by SEAL, but tries to mimic SEAL's C++ API as close as possible. That is, file names, function/variable names, the order of arguments etc. are as close as possible to the SEAL C++ code as possible. The reason for this is that the SEAL library provides excellent inline code documentation, thus by reading (and understanding) the comments in the C++ files you should immediately be able to reproduce the same implementation with SEAL.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"However, some implementation details do not translate well from C++ to Julia. Also, the Julia community has a few strong conventions that if violated would make it unnecessarily difficult for experienced Julia users to use SEAL.jl correctly. Thus, when trying to recreate SEAL examples written in C++ with SEAL.jl in Julia, there are a few things to watch out for:","category":"page"},{"location":"","page":"Home","title":"Home","text":"Functions that modify their input are suffixed by !.\nFunction arguments that are modified come first (but the rest remains in order) .\nWhen translating C++ member function to Julia, the \"owning\" object is always passed as the last argument.\nWhile x.size() in C++ returns a scalar, length-like value, size(x) in Julia is expected to return a tuple, which is also the case in SEAL.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"The next example shows the first three items in practice. The C++ code snippet","category":"page"},{"location":"","page":"Home","title":"Home","text":"evaluator.multiply_plain(x1_encrypted, plain_coeff3, x1_encrypted_coeff3);","category":"page"},{"location":"","page":"Home","title":"Home","text":"is translated to the following Julia code:","category":"page"},{"location":"","page":"Home","title":"Home","text":"multiply_plain!(x1_encrypted_coeff3, x1_encrypted, plain_coeff3, evaluator)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Note the trailing !, the fact that x1_encrypted_coeff3 as the modified input variable is now the first argument, and evaluator being passed as the last argument.","category":"page"},{"location":"#Authors","page":"Home","title":"Authors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SEAL.jl was initiated by Michael Schlottke-Lakemper (University of Cologne, Germany), who is also the principal developer of SEAL.jl.","category":"page"},{"location":"#License-and-contributing","page":"Home","title":"License and contributing","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"SEAL.jl is licensed under the MIT license (see License). Since SEAL.jl is an open-source project, we are very happy to accept contributions from the community. Please refer to Contributing for more details.","category":"page"},{"location":"#Acknowledgements","page":"Home","title":"Acknowledgements","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This Julia package would have not been possible without the excellent work of the developers of the SEAL library. Their high-quality code documentation plus the fact that they provide C bindings for the entire functionality of the SEAL C++ library have made developing SEAL.jl a breeze.","category":"page"}]
}
