import crypto from "crypto";

/**
 * The decryptMessage(encryptedMessage) function is designed to decrypt data that has been encrypted using an RSA public key. Here’s a breakdown of how it works:
 *
 * Breakdown:
 * Function Definition:
 *
 * The function takes one parameter, encryptedMessage, which is the ciphertext you want to decrypt.
 * Buffer Conversion:
 *
 * Buffer.from(encryptedMessage, 'base64'): The encrypted message is first converted from a Base64 string to a Buffer. This is necessary because the privateDecrypt function requires input in binary format.
 * Decryption:
 *
 * crypto.privateDecrypt(privateKey, ...): This method uses the corresponding RSA private key to decrypt the Buffer containing the encrypted message. It performs the mathematical operations necessary to reverse the encryption process.
 * Return Value:
 *
 * decrypted.toString(): The decrypted Buffer is converted back to a string, which represents the original plaintext message.
 * Use Case:
 * This function is essential for securely retrieving the original message after it has been encrypted with the public key. Only the holder of the private key can decrypt the message, ensuring confidentiality.
 *
 * @param encryptedMessage
 * @param privateKey
 * @returns {string}
 */
export const decryptMessage = (encryptedMessage, privateKey) => {
    try {
        const decrypted = crypto.privateDecrypt(privateKey, Buffer.from(encryptedMessage, 'base64'));
        return decrypted.toString();
    } catch (error) {
        console.error(error);
    }
}