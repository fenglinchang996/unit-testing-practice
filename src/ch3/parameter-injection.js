const SUNDAY = 0,
  SATURDAY = 6;

const verifyPassword = (input, rules, currentDay) => {
  if ([SATURDAY, SUNDAY].includes(currentDay)) {
    throw new Error("It's the weekend!");
  }
  // More code goes here
  // Return list of errors found
  return [];
};

export default verifyPassword;
