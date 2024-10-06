import crypto from "crypto";

/**
 * AES-256-CTR is a symmetric encryption algorithm that uses a 256-bit key and operates in counter (CTR) mode.
 * In this mode, data is encrypted in blocks, and a unique counter value is combined with the key to produce a stream
 * of pseudo-random data that gets XORed with the plaintext. This allows for efficient encryption and decryption,
 * as you can process data in parallel. It's also important to use a unique initialization vector (IV) for each encryption
 * session to ensure security.
 *
 * CTR stands for "Counter." In this mode, a counter value is combined with a nonce or initialization vector (IV)
 * to generate a unique stream of data for encryption.
 *
 * CBC stands for "Cipher Block Chaining." In this mode, each block of plaintext is XORed with the previous ciphertext
 * block before being encrypted. This creates a dependency between blocks, enhancing security by ensuring that identical
 * plaintext blocks produce different ciphertext blocks, provided the same key is used.
 *
 * @param plainText original data
 * @param options accepts key and initial vector
 * @returns {{encryptedData: string, iv: (*|string), key: (*|string)}} encrypted data
 */
export const encrypt = (plainText, options = {key: null, iv: null}) => {
    try {
        const key = options?.key ?? crypto.randomBytes(32); // 256-bit key
        const iv = options?.iv ?? crypto.randomBytes(16); // Initialization vector
        const cipher = crypto.createCipheriv('aes-256-ctr', key, iv);
        const encrypted = Buffer.concat([cipher.update(plainText, 'utf8'), cipher.final()]);
        return {key: key.toString('base64'), iv: iv.toString('base64'), encryptedData: encrypted.toString('base64')};
    } catch (error) {
        throw error;
    }
}
