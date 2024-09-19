import makeVerifier from "./password-verifier-logger";

test("given logger and passing scenario", () => {
  const mockLog = { info: jest.fn() };
  const verify = makeVerifier([], mockLog);

  verify("anything");

  expect(mockLog.info).toHaveBeenCalledWith(expect.stringMatching(/PASSED/));
});
