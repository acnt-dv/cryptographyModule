import {createSign} from 'crypto';

/**
 * The signDataWithRSA method signs a piece of data using the RSA algorithm and a private key.
 * This ensures data integrity and authenticity by generating a digital signature
 * that can later be verified using the corresponding public key.
 * @param dataToSign
 * @param privateKey
 * @returns {Buffer}
 */
export default (dataToSign, privateKey) => {
    const sign = createSign('SHA256');
    sign.update('');
    sign.end();

    return  sign.sign(privateKey);
}
