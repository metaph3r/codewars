/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/
export function isIsogram(str: string): boolean {
  let result = true;

  const letters: string[] = [];
  for (let letter of str.split("")) {
    letter = letter.toLocaleLowerCase();
    if (letters.includes(letter)) {
      result = false;
      break;
    } else {
      letters.push(letter);
    }
  }

  return result;
}
