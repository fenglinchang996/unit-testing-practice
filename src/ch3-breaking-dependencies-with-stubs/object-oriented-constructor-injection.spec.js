import PasswordVerifier, {
  SUNDAY,
} from "./object-oriented-constructor-injection.js";

describe("PasswordVerifier - object-oriented constructor injection", () => {
  test("on weekends, throws exceptions", () => {
    const alwaysSunday = () => SUNDAY;
    const verifier = new PasswordVerifier([], alwaysSunday);
    expect(() => verifier.verify("anything")).toThrow("It's the weekend!");
  });
});
