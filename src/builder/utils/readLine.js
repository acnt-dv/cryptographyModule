import readline from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

export default async () => {
    const rl = readline.createInterface({input, output});
    const answer = await rl.question('Insert your input:\n');
    rl.close();

    return answer;
}