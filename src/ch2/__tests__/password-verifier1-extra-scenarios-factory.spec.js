import PasswordVerifier1 from "../password-verifier1.js";

const makeFailingRule = (reason) => (input) => ({ passed: false, reason });
const makePassingRule = () => (input) => ({ passed: true, reason: "" });

describe("verifyPassword", () => {
  let verifier;
  beforeEach(() => (verifier = new PasswordVerifier1()));
  describe("with a failing rule", () => {
    let errors;
    beforeEach(() => {
      verifier.addRule(makeFailingRule("fake reason"));
      errors = verifier.verify("any value");
    });
    it("has an error message based on the rule.reason", () => {
      expect(errors[0]).toContain("fake reason");
    });

    it("has exactly one error", () => {
      expect(errors.length).toBe(1);
    });
  });
  describe("with a passing rule", () => {
    let errors;
    beforeEach(() => {
      verifier.addRule(makePassingRule());
      errors = verifier.verify("any value");
    });
    it("has no errors", () => {
      expect(errors.length).toBe(0);
    });
  });
  describe("with a failing rule and a passing rule", () => {
    let errors;
    beforeEach(() => {
      verifier.addRule(makePassingRule());
      verifier.addRule(makeFailingRule("fake reason"));
      errors = verifier.verify("any value");
    });
    it("has one errors", () => {
      expect(errors.length).toBe(1);
    });
    it("error text beolongs to failed rule", () => {
      expect(errors[0]).toContain("fake reason");
    });
  });
});
