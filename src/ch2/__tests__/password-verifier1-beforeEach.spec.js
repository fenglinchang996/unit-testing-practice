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
});
