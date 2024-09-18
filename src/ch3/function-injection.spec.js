import verifyPassword from "./function-injection.js";

const SUNDAY = 0,
  SATURDAY = 6;

describe("verifyPassword - dummy function", () => {
  test("on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY;
    expect(() => verifyPassword("anything", [], alwaysSunday)).toThrow(
      "It's the weekend!",
    );
  });
});
