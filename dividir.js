function division(num1, num2) {
  if (num2 == 0) {
    return "no se puede realizar la opreacion";
  }
  return num1 / num2;
}
module.exports = {division}