import verifyPassword, { SATURDAY, inject } from "./modular-injection.js";

const injectDate = (newDay) => {
  const reset = inject({
    moment: function () {
      // We're faking the moment.js module's API
      return {
        day: () => newDay,
      };
    },
  });
  return reset;
};

describe("verifyPassword - modular injection", () => {
  test("on weekends, throws exceptions", () => {
    const reset = injectDate(SATURDAY);
    expect(() => verifyPassword("anything", [])).toThrow("It's the weekend!");

    reset();
  });
});
