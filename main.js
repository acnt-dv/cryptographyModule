import version from './src/version.js';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import readLine from "./src/builder/utils/readLine.js";
import {encrypt} from "./src/builder/encryption/symmetricEncryption.js";
import {decrypt} from "./src/builder/decryption/symmetricDecryption.js";

const moduleWorker = async () => {
    try {
        console.log(`Crypto Module ${version}\n`);

        const userInput = await readLine();

        const cipher = encrypt(userInput)
        console.info(cipher);
        console.info(decrypt(cipher.encryptedData, cipher.key, cipher.iv));

    } catch (error) {
        console.error(error);
    }
}

moduleWorker();