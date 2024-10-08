/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.

Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
export function validBraces(braces: string): boolean {
  if (braces.length % 2 !== 0) return false;

  const stack: string[] = [];
  for (let i = 0; i < braces.length; i++) {
    switch (braces[i]) {
      case "(":
      case "[":
      case "{":
        stack.push(braces[i]);
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
    }
  }

  return stack.length === 0;
}
