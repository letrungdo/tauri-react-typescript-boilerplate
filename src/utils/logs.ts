import { ENV } from "@constants/app";
/* eslint-disable */

let logDev = (_message?: any, ..._optionalParams: any[]) => {};
let logError = (_message?: any, ..._optionalParams: any[]) => {};
let logWarn = (_message?: any, ..._optionalParams: any[]) => {};

if (!ENV.PRD) {
  logDev = console.log.bind(console);
  logError = console.error.bind(console);
  logWarn = console.warn.bind(console);
}

export { logDev, logError, logWarn };
