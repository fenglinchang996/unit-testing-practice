const makeVerifier = (rules, logger) => (input) => {
  const failed = rules
    .map((rule) => rule(input))
    .filter((result) => result === false);

  if (failed.length === 0) {
    logger.info("PASSED");
    return true;
  }

  logger.info("FAILED");
  return false;
};

export default makeVerifier;
