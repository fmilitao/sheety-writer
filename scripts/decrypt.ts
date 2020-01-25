import * as CryptoJS from 'crypto-js';
import { readFileSync, existsSync } from 'fs';

const [_node, _script, password, file] = process.argv;
if (password === undefined) {
  throw Error('Must supply password as first argument (non-empty)');
}
if (file === undefined) {
  throw Error('Must supply a JSON file as second argument (non-empty)');
}
if (!existsSync(file)) {
  throw Error(`File ${file} does not exist`);
}
const json = JSON.parse(readFileSync(file).toString());
const decrypted = CryptoJS.AES.decrypt(json, password);
console.log(decrypted.toString(CryptoJS.enc.Utf8));
