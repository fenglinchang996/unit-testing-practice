import verifyPassword, { SUNDAY } from "./parameter-injection.js";

describe("verifyPassword - dummy object", () => {
  test("on weekends, throws exceptions", () => {
    expect(() => verifyPassword("anything", [], SUNDAY)).toThrow(
      "It's the weekend!",
    );
  });
});
