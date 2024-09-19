import verifyPassword, { SUNDAY } from "./function-injection.js";

describe("verifyPassword - dummy function", () => {
  test("on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY;
    expect(() => verifyPassword("anything", [], alwaysSunday)).toThrow(
      "It's the weekend!",
    );
  });
});
