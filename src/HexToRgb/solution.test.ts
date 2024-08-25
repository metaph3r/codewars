import { hexStringToRGB } from "./solution";

describe("Example Tests", function (): void {
  it("Basic Test", function (): void {
    expect(hexStringToRGB("#FF9933")).toStrictEqual({ r: 255, g: 153, b: 51 });
  });
});
