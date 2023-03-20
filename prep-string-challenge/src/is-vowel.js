/* exported isVowel */
function isVowel(char) {
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < 6; i++) {
    if (char.toLowerCase() === vowel[i]) {
      return true;
    }
  } return false;
}
