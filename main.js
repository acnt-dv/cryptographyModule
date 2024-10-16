import version from './src/version.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import readLine from "./src/builder/utils/readLine.js";
import {encrypt} from "./src/builder/encryption/symmetricEncryption.js";
import {decrypt} from "./src/builder/decryption/symmetricDecryption.js";
import signData from "./src/builder/sign/signData.js";
import {generateRsaKeyPair} from "./src/builder/keyPairs/generateKeyPairs.js";
import verifySignature from "./src/builder/verifySignature/verifySignature.js";

const moduleWorker = async () => {
    try {
        console.log(`Crypto Module ${version}\n`);

        const userInput = await readLine();

        const cipher = encrypt(userInput)
        console.info(cipher);
        console.info(decrypt(cipher.encryptedData, cipher.key, cipher.iv));

        const {privateKey, publicKey} = generateRsaKeyPair(2048);
        const signature = signData(userInput, privateKey);
        console.log(signature.toString('base64'));

        const isValid = verifySignature(userInput, publicKey, signature);
        console.log(isValid);

    } catch (error) {
        console.error(error);
    }
}

moduleWorker();