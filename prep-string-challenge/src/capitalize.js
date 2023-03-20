/* exported capitalize */
function capitalize(word) {
  const lowerCase = word.toLowerCase();
  let capitalizeWord = lowerCase.charAt(0).toUpperCase();
  for (let i = 1; i < word.length; i++) {
    capitalizeWord += lowerCase[i];
  }
  return capitalizeWord;
}
