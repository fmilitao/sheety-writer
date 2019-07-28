import CryptoJS from 'crypto-js';
import { validate } from './validation';
// import configFile from '../resources/decrypted.json';
import configFile from '../resources/encrypted.json';

const url = new URL(window.location.href);

function parseBoolean(param: string | null) {
  return param !== null && param.toLowerCase() === 'true';
}

export function isDebug(): boolean {
  const param = url.searchParams.get('debug');
  return parseBoolean(param);
}

function getConfigParamOrResource(): unknown {
  const configParam = url.searchParams.get('config');
  if (configParam === null) {
    return configFile;
  }
  return configParam;
}

function decrypt(encrypted: string, password: string): any {
  const decrypted = CryptoJS.AES.decrypt(encrypted, password);
  return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8));
}

function getConfigObject(password?: string): Valid<any> {
  const config = getConfigParamOrResource();
  // console.log('using config', config);
  if (typeof config === 'string') {
    try {
      return { valid: true, value: JSON.parse(config) };
    } catch {
      // ignores any error, assumes some parsing failure
      if (password) {
        try {
          const decrypted = decrypt(config, password);
          return { valid: true, value: decrypted };
        } catch (error) {
          // fall through
        }
      }
    }
    return { valid: false };
  }
  return { valid: true, value: config };
}

export function getConfig(password?: string): Valid<GApiData> {
  const json = getConfigObject(password);
  if (!json.valid) {
    return { valid: false };
  }
  const validation = validate(json.value);
  if (validation.valid) {
    return { valid: true, value: validation.value };
  }
  return { valid: false };
}
