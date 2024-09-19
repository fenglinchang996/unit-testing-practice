const SUNDAY = 0,
  SATURDAY = 6;

const verifyPassword = (input, rules, getDayFn) => {
  const dayOfWeek = getDayFn();
  if ([SATURDAY, SUNDAY].includes(dayOfWeek)) {
    throw new Error("It's the weekend!");
  }
  // More code goes here
  // Return list of errors found
  return [];
};

export default verifyPassword;
export { SUNDAY, SATURDAY };
