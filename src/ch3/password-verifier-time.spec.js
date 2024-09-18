import moment from "moment";
import verifyPassword from "./password-verifier-time.js";
const SUNDAY = 0,
  SATURDAY = 6;

describe("verifyPassword", () => {
  const TODAY = moment().day();

  // test is always executed, but might not do anything
  test("on weekends, throws exceptions", () => {
    if ([SATURDAY, SUNDAY].includes(TODAY)) {
      expect(() => verifyPassword("anything", [])).toThrow("It's the weekend!");
    }
  });

  // test is not even executed on week days
  if ([SATURDAY, SUNDAY].includes(TODAY)) {
    test("on weekends, throws exceptions", () => {
      expect(() => verifyPassword("anything", [])).toThrow("It's the weekend!");
    });
  }
});
