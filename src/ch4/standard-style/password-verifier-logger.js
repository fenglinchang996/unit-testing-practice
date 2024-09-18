import log from "./complicated-logger.js";

const verifyPassword = (input, rules) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    log.info("PASSED");
    return true;
  }

  log.info("FAIL");
  return false;
};

export default verifyPassword;
