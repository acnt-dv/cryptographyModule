import crypto from "crypto";

/**
 * RSA (Rivest-Shamir-Adleman) is an asymmetric encryption algorithm that uses a key pair: a public key and a private key.
 * Key Pair Components
 * Public Key:
 *
 * Usage: Can be shared with anyone. It's used to encrypt messages or verify signatures.
 * Composition: Composed of two numbers:
 * Modulus (n): The product of two large prime numbers (p and q).
 * Exponent (e): A number that is typically set to a small value (commonly 65537) to facilitate encryption.
 * Private Key:
 *
 * Usage: Kept secret and used to decrypt messages encrypted with the corresponding public key or to create signatures.
 * Composition: Contains the same modulus (n) and a different exponent (d), which is derived from the public exponent (e) and the totient of n (φ(n)).
 *
 * Security
 * The security of RSA relies on the difficulty of factoring the product of two large prime numbers. As long as the key sizes are sufficiently large (typically 2048 bits or more), RSA remains secure against brute-force attacks.
 *
 * Summary
 * In essence, RSA key pairs allow secure communication and digital signatures, enabling confidentiality and authenticity in data transmission.
 *
 * @returns {{privateKey, publicKey}}
 */
export const generateRsaKeyPair = (keyLength = 1024) => {
    try {
        const {publicKey, privateKey} = crypto.generateKeyPairSync('rsa', {
            modulusLength: keyLength,
        });
        return {publicKey, privateKey};
    } catch (error) {
        throw error;
    }
}