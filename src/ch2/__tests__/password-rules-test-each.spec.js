import { oneUpperCaseRule } from "../password-rules.js";

describe("one uppercase rule", () => {
  test("given no uppercase, it fails", () => {
    const result = oneUpperCaseRule("abc");
    expect(result.passed).toBe(false);
  });
  test.each(["Abc", "aBc"])("given one uppercase, it passes", (input) => {
    const result = oneUpperCaseRule(input);
    expect(result.passed).toBe(true);
  });
});

// You can further use test.each() for more control
describe("use test.each() for one uppercase rule", () => {
  test.each([
    ["Abc", true],
    ["aBc", true],
    ["abc", false],
  ])("given %s, %s", (input, expected) => {
    const result = oneUpperCaseRule(input);
    expect(result.passed).toBe(expected);
  });
});
