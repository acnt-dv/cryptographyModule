import {createVerify} from 'crypto';

/**
 * To verify the signature of data using the RSA public key.
 * This allows the recipient to ensure that the data came from a trusted source and that it has not been modified.
 * @param data The original data that was signed.
 * @param publicKey The RSA public key used for verification (PEM-formatted string or buffer).
 * @param signature The digital signature generated by the private key, provided as a base64-encoded string.
 * @param algorithm (optional): The hashing algorithm that was used for signing, typically 'sha256'.
 *
 * @returns {boolean} A buffer containing the digital signature of the data.
 */
export default (data, publicKey, signature, algorithm = 'SHA256') => {
    const verify = createVerify(algorithm);
    verify.update(data);
    verify.end();

    return verify.verify(publicKey, signature, 'base64');
}
