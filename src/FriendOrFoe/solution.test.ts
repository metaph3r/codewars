import { friend } from "./solution";

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    expect(friend(["Ryan", "Kieran", "Mark"])).toEqual(["Ryan", "Mark"]);
    expect(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"])).toEqual(["Ryan"]);
    expect(
      friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
    ).toEqual(["Jimm", "Cari", "aret"]);
    expect(friend(["Love", "Your", "Face", "1"])).toEqual([
      "Love",
      "Your",
      "Face",
    ]);
  });
});
