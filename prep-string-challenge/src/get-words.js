/* exported getWords */
function getWords(string) {
  if (string === '') {
    return [];
  }
  let words = [];
  words = string.split(' ');
  return words;
}
