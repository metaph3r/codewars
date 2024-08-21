import { validBraces } from "./solution";

describe("solution", function () {
  it("should handle basic tests", function () {
    expect(validBraces("[(]")).toBe(false);
    expect(validBraces("()")).toBe(true);
    expect(validBraces("[(])")).toBe(false);
    expect(validBraces("(){}[]")).toBe(true);
    expect(validBraces("([{}])")).toBe(true);
    expect(validBraces("(}")).toBe(false);
    expect(validBraces("[({})](]")).toBe(false);
    expect(validBraces("(((({{")).toBe(false);
  });
});
