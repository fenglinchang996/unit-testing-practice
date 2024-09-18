const SUNDAY = 0,
  SATURDAY = 6;

class PasswordVerifier {
  constructor(rules, dayOfWeekFn) {
    this.rules = rules;
    this.dayOfWeekFn = dayOfWeekFn;
  }

  verify(input) {
    if ([SATURDAY, SUNDAY].includes(this.dayOfWeekFn())) {
      throw new Error("It's the weekend!");
    }
    const errors = [];
    // More code goes here
    // Return list of errors found
    return errors;
  }
}

export default PasswordVerifier;
export { SUNDAY, SATURDAY };
