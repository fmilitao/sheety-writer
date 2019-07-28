// intentional use of require instead of import
const CryptoJS = require('crypto-js');
const { readFileSync, existsSync } = require('fs');

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
