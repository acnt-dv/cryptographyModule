import crypto from "crypto";

/**
 * The crypto.publicEncrypt(publicKey, Buffer.from(message)) function in Node.js is used to encrypt data using an asymmetric encryption algorithm (typically RSA) with a public key.
 *
 * Breakdown:
 * publicKey: This is the RSA public key that you obtained during key pair generation. It can be shared publicly and is used for encryption.
 *
 * Buffer.from(message): The message you want to encrypt is converted into a Buffer. This is necessary because the encryption function requires the input to be in a binary format.
 *
 * Encryption Process:
 *
 * The function encrypts the provided message using the public key.
 * The result is ciphertext, which can only be decrypted by the corresponding private key.
 * Use Case:
 * This function is commonly used to securely transmit sensitive data (like passwords or private information) over untrusted networks, ensuring that only the intended recipient can decrypt the data using their private key.
 *
 * @param message
 * @param publicKey
 * @returns {string}
 */
export const encryptMessage = (message, publicKey) => {
    try {
        const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(message));
        return encrypted.toString('base64');
    } catch (error) {
        throw error;
    }
}