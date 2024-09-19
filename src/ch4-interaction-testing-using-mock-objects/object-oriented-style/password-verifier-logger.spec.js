import PasswordVerifier from "./password-verifier-logger";

describe("duck typing with class constructor injection", () => {
  describe("PasswordVerifier", () => {
    test("logger&passing scenario, calls logger with PASSED", () => {
      let logged = "";
      const mockLog = { info: (text) => (logged = text) };
      const verifier = new PasswordVerifier([], mockLog);

      verifier.verify("anything");

      expect(logged).toMatch(/PASSED/);
    });
  });
});
