import verifyPassword from "../password-verifier0.js";

describe("verifyPassword", () => {
  describe("with a failing rule", () => {
    it("returns errors", () => {
      // Arrange
      const fakeRule = (input) => ({ passed: false, reason: "fake reason" });

      // Act
      const errors = verifyPassword("any value", [fakeRule]);

      // Assert
      expect(errors[0]).toContain("fake reason");
    });
  });
});
