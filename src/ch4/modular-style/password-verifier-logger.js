import logger from "./complicated-logger.js";
import configs from "./configuration-service.js";

const log = (text) => {
  if (configs.getLogLevel() === "info") {
    logger.info(text);
  } else if (configs.getLogLevel() === "debug") {
    logger.debug(text);
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
