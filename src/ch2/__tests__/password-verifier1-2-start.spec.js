import PasswordVerifier1 from "../password-verifier1.js";

describe("verifyPassword", () => {
  let verifier;
  beforeEach(() => (verifier = new PasswordVerifier1()));
  describe("with a failing rule", () => {
    let fakeRule, errors;
    beforeEach(() => {
      fakeRule = (input) => ({ passed: false, reason: "fake reason" });
      verifier.addRule(fakeRule);
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
    let fakeRule, errors;
    beforeEach(() => {
      fakeRule = (input) => ({ passed: true, reason: "" });
      verifier.addRule(fakeRule);
      errors = verifier.verify("any value");
    });
    it("has no errors", () => {
      expect(errors.length).toBe(0);
    });
  });
  describe("with a failing rule and a passing rule", () => {
    let fakeRuleFail, fakeRulePass, errors;
    beforeEach(() => {
      fakeRulePass = (input) => ({ passed: true, reason: "" });
      fakeRuleFail = (input) => ({ passed: false, reason: "fake reason" });
      verifier.addRule(fakeRulePass);
      verifier.addRule(fakeRuleFail);
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
