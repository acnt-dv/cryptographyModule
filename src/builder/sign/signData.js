import {createSign} from 'crypto';

/**
 * The signDataWithRSA method signs a piece of data using the RSA algorithm and a private key.
 * This ensures data integrity and authenticity by generating a digital signature
 * that can later be verified using the corresponding public key.
 * @param dataToSign The data to be signed. This can be a string, buffer, or other binary data.
 * @param privateKey The private key used for signing, provided as a string, buffer, or PEM-encoded key
 * @param algorithm (optional): The hashing algorithm used for signing, typically 'sha256'.
 * @returns {Buffer} A buffer containing the digital signature of the data.
 */
export default (dataToSign, privateKey, algorithm='SHA256') => {
    const sign = createSign(algorithm);
    sign.update(dataToSign);
    sign.end();

    return  sign.sign(privateKey);
}
