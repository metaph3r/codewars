// See https://www.chaijs.com for how to use Chai.
import { pigIt } from "./solution";

describe("Tests", () => {
  it("test", () => {
    expect(pigIt("Pig latin is cool")).toBe("igPay atinlay siay oolcay");
    expect(pigIt("This is my string")).toBe("hisTay siay ymay tringsay");
    expect(pigIt("Hello world !")).toBe("elloHay orldway !");
  });
});
