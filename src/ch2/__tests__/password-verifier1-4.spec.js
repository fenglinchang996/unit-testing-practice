import PasswordVerifier1 from "../password-verifier1.js";

const makeVerifier = () => new PasswordVerifier1();

test("verify, with no rules, throws exception", () => {
  const verifier = makeVerifier();
  expect(() => {
    verifier.verify("any input");
  }).toThrow();
});
