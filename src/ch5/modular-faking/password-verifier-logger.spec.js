import { jest } from "@jest/globals";
import verifyPassword from "./password-verifier-logger.js";
import { info } from "./complicated-logger.js";
import { getLogLevel } from "./configuration-service.js";

jest.mock("./complicated-logger.js");
jest.mock("./configuration-service.js");

describe("password verifier", () => {
  afterEach(jest.resetAllMocks);

  test("with info log level and no rules, it calls the logger with PASSED", () => {
    getLogLevel.mockReturnValue("info");

    verifyPassword("anything", []);

    expect(info).toHaveBeenCalled();
  });
});
