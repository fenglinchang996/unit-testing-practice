import { oneUpperCaseRule } from "../password-rules.js";

describe("one uppercase rule", () => {
  test("given no uppercase, it fails", () => {
    const result = oneUpperCaseRule("abc");
    expect(result.passed).toBe(false);
  });
  test("given one uppercase, it passes", () => {
    const result = oneUpperCaseRule("Abc");
    expect(result.passed).toBe(true);
  });
  test("given a different uppercase, it passes", () => {
    const result = oneUpperCaseRule("aBc");
    expect(result.passed).toBe(true);
  });
});
