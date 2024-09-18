import moment from "moment";

const originalDependencies = {
  moment,
};
let dependencies = { ...originalDependencies };
const inject = (fakes) => {
  Object.assign(dependencies, fakes);
  return function reset() {
    dependencies = { ...originalDependencies };
  };
};

const SUNDAY = 0,
  SATURDAY = 6;

const verifyPassword = (input, rules) => {
  const dayOfWeek = dependencies.moment().day();
  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw new Error("It's the weekend!");
  }
  // More code goes here
  // Return list of errors found
  return [];
};

export default verifyPassword;
export { inject, SUNDAY, SATURDAY };
