module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.map(bracket => bracket.join(''));
  const hasBracket = (str, brackets) => brackets.find(bracket => str.includes(bracket));

  let bracket;
  while (bracket = hasBracket(str, brackets)) {
    str = str.replaceAll(bracket, '');
  }
  return !str.length;
}
