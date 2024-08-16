import { isIsogram } from "./solution";

// TODO Add your tests here
describe("example", function () {
  it("test", function () {
    expect(isIsogram("Dermatoglyphics")).toEqual(true);
    expect(isIsogram("isogram")).toEqual(true);
    expect(isIsogram("aba")).toEqual(false);
    expect(isIsogram("moOse")).toEqual(false);
    expect(isIsogram("isIsogram")).toEqual(false);
    expect(isIsogram("")).toEqual(true);
  });
});
