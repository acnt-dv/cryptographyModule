import {createVerify} from 'crypto';

/**
 *
 * @param data
 * @param publicKey
 * @param signature
 * @param algorithm
 *
 * @returns {boolean} A buffer containing the digital signature of the data.
 */
export default (data, publicKey, signature, algorithm='SHA256') => {
    const verify = createVerify(algorithm);
    verify.update(data);
    verify.end();

    return verify.verify(publicKey, signature, 'base64');
}
