# cryptographyModule

## Overview

This repository provides a set of cryptographic tools and utilities implemented in Node.js. The project offers support for hashing, encryption, decryption, RSA key generation, signing, and verifying signatures. It is designed to simplify the process of implementing secure cryptographic functionalities in your applications.

## Features

- **Hashing**: Create secure hashes using various algorithms such as SHA-1 SHA-384 SHA-256 and SHA-512.
- **Encryption/Decryption**: Symmetric encryption using AES algorithms.
- **RSA Key Generation**: Generate public/private key pairs for RSA encryption.
- **Digital Signing**: Sign data using private keys.
- **Signature Verification**: Verify the authenticity of signed data using public keys.

## Installation

Clone the repository and install dependencies:


## USAGE
### Hashing
Create a secure hash using SHA-256:

```javascript
// Example data
const data = "Hello World";
const hash = hashData(HASHING_ALGORITHM.SHA256, data);
console.log(`Hash: ${hash}`);
```

### Base64
Working with base64 util to encode and decode contents.

```javascript
// Example data
const originalContent ="Hello World"; 
const encodedContent = base64Encode(originalContent);
const decodedContent = base64Decode(encodedContent);

console.log(`Base64 encoded: ${encodedContent}`);
console.log(`Base64 decoded: ${decodedContent}`);
```

#### **to reading file content buffer use util readFileContent**

```javascript
// Example usage
const buffer = readFileContent('//path'); 
```

## signDataWithRSA
Purpose:
The signDataWithRSA method signs a piece of data using the RSA algorithm and a private key. This ensures data integrity and authenticity by generating a digital signature that can later be verified using the corresponding public key.

```javascript
const {privateKey, publicKey} = generateRsaKeyPair(2048);
const signature = signData(userInput, privateKey);
console.log(signature.toString('base64'));
```

Explanation:
crypto.createSign(algorithm): Initializes a new Sign object for the specified hashing algorithm (defaulting to 'sha256').
sign.update(data): Adds the data to be signed to the Sign object. You can update the sign object multiple times if the data is large.
sign.end(): Signals that the input data is complete, preparing it for signing.
sign.sign(privateKey): Generates the digital signature using the specified private key. The result is a buffer containing the signature.
This method ensures that the data can be verified later with the corresponding public key, validating both the source and integrity of the data.