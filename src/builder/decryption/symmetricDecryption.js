import crypto from "crypto";

/**
 * decipher the encrypted data with key and iv of generated.
 * @param encryptedText
 * @param key
 * @param iv
 * @returns {string}
 */
export const decrypt = (encryptedText, key, iv) => {
    try {
        const decipher = crypto.createDecipheriv('aes-256-ctr', Buffer.from(key, 'base64'), Buffer.from(iv, 'base64'));
        const decrypted = Buffer.concat([decipher.update(Buffer.from(encryptedText, 'base64')), decipher.final()]);
        return decrypted.toString();
    } catch (error) {
        throw error;
    }
}
