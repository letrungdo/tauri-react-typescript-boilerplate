const env = "development"; // TODO: //process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV;

export const ENV = Object.freeze({
  DEV: env === "development",
  STUB: false,
  PRD: false,
  // STUB: env === "stub",
  // PRD: env === "production",
});

// Cookies key
export const LF_COOKIE = "lf";