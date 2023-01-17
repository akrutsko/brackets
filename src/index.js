module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  bracketsConfig.forEach(bracket => brackets.push(bracket.join('')));

  let bracket;
  const hasBracket = (str, brackets) => brackets.find(bracket => str.includes(bracket));

  while (bracket = hasBracket(str, brackets)) {
    str = str.replaceAll(bracket, '');
  }
  return !str.length;
}
