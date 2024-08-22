import { order } from "./solution";

describe("solution", function () {
  it("basicTests", function () {
    expect(order("is2 Thi1s T4est 3a")).toEqual("Thi1s is2 3a T4est");
    expect(order("4of Fo1r pe6ople g3ood th5e the2")).toEqual("Fo1r the2 g3ood 4of th5e pe6ople");
    expect(order("")).toEqual("");
  });
});
