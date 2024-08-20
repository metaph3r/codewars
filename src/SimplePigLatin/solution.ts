/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
export const pigIt = (a: string): string => {
  return a.split(" ").reduce((previous, current, index, a) => {
    return previous
      .concat(current.substring(1))
      .concat(current.charAt(0))
      .concat(/[a-zA-z]/.test(current.charAt(0)) ? "ay" : "")
      .concat(index < a.length - 1 ? " " : "");
  }, "");
};
