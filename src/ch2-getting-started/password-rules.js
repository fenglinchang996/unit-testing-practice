export const oneUpperCaseRule = (input) => {
  return {
    passed: input.toLowerCase() !== input,
    reason: "at least one uppercase needed",
  };
};
