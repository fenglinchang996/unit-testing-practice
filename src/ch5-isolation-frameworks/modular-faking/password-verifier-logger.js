import { info, debug } from "./complicated-logger.js";
import { getLogLevel } from "./configuration-service.js";

const log = (text) => {
  if (getLogLevel() === "info") {
    info(text);
  } else if (getLogLevel() === "debug") {
    debug(text);
  }
};

const verifyPassword = (input, rules) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    log("PASSED");
    return true;
  }

  log("FAIL");
  return false;
};

export default verifyPassword;
