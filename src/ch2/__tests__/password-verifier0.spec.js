import verifyPassword from "../password-verifier0.js";

test("badly named test", () => {
  const fakeRule = (input) => ({ passed: false, reason: "fake reason" });

  const errors = verifyPassword("any value", [fakeRule]);

  expect(errors[0]).toContain("fake reason");
});
