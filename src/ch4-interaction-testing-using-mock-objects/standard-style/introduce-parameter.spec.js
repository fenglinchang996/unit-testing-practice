import verifyPassword from "./introduce-parameter";

describe("verifyPassword", () => {
  describe("when all rules pass", () => {
    it("calls the logger with PASSED", () => {
      let written = "";
      const mocklog = {
        info: (text) => (written = text),
      };

      verifyPassword("anything", [], mocklog);

      expect(written).toMatch(/PASSED/);
    });
  });
});
