import makeVerifier from "./password-verifier-logger.js";

describe("verifyPassword - higher-order-injection", () => {
  describe("given logger and passing scenario", () => {
    test("calls the logger with PASS", () => {
      let logged = "";
      const mockLog = { info: (text) => (logged = text) };

      const passVerify = makeVerifier([], mockLog);

      passVerify("anything");

      expect(logged).toMatch(/PASSED/);
    });
  });
});
