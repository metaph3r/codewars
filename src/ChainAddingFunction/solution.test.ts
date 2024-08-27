import add from "./solution";

describe("solution", () => {
  it("should work when called once", () => {
    expect(add(1).valueOf()).toEqual(1);
  });
  it("should work when called twice", () => {
    expect(add(1)(2).valueOf()).toEqual(3);
  });
  it("should work when called 3 times", () => {
    expect(add(1)(2)(3).valueOf()).toEqual(6);
  });
  it("should work when called 5 times", () => {
    expect(add(1)(2)(3)(4)(5).valueOf()).toEqual(15);
  });
});
