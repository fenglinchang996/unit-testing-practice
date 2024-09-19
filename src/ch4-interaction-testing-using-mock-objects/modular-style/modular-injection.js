import * as logger from "../complicated-logger.js";
import * as configs from "./configuration-service.js";

const originalDependencies = {
  logger,
  configs,
};

let dependencies = { ...originalDependencies };

const resetDependencies = () => {
  dependencies = { ...originalDependencies };
};

const injectDependencies = (fakes) => {
  Object.assign(dependencies, fakes);
};

const log = (text) => {
  if (dependencies.configs.getLogLevel() === "info") {
    dependencies.logger.info(text);
  } else if (dependencies.configs.getLogLevel() === "debug") {
    dependencies.logger.debug(text);
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
export { injectDependencies, resetDependencies };
