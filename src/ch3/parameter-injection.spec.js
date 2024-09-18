import verifyPassword from "./parameter-injection.js";

const SUNDAY = 0,
  SATURDAY = 6;

describe("verifyPassword - dummy object", () => {
  test("on weekends, throws exceptions", () => {
    expect(() => verifyPassword("anything", [], SUNDAY)).toThrow(
      "It's the weekend!",
    );
  });
});
