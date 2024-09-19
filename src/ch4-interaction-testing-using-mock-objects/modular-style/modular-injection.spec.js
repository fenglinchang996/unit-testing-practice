import verifyPassword, {
  injectDependencies,
  resetDependencies,
} from "./modular-injection.js";

describe("verifyPassword - modular injection", () => {
  afterEach(resetDependencies);

  describe("given logger and passing scenario", () => {
    it("calls the logger with PASS", () => {
      let logged = "";
      const mocklogger = {
        info: (text) => (logged = text),
      };
      injectDependencies({ logger: mocklogger });

      verifyPassword("anything", []);

      expect(logged).toMatch(/PASSED/);
    });
  });
});
