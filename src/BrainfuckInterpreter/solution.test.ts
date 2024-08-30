import { brainLuck } from "./solution";

describe("brainLuck", () => {
  it("Echo until byte(255) encountered", () => {
    expect(
      brainLuck(",+[-.,+]", "Codewars" + String.fromCharCode(255))
    ).toEqual("Codewars");
  });

  it("Echo until byte(0) encountered", () => {
    expect(brainLuck(",[.[-],]", "Codewars" + String.fromCharCode(0))).toEqual(
      "Codewars"
    );
  });

  it("Two numbers multiplier", () => {
    expect(
      brainLuck(",>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.", String.fromCharCode(8, 9))
    ).toEqual(String.fromCharCode(72));
  });
});
