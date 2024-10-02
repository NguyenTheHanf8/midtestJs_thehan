function checkNumber(n) {
  if (isNaN(n)) return "Invalid";
  else if (n % 3 === 0 && n % 5 === 0 && n % 15 === 0)
    return "Chia hết cho cả 3 số 3, 5 và 15";
  else if (n % 3 === 0) return "Chia hết cho 3";
  else if (n % 5 === 0) return "Chia hết cho 5";
  else return "Không chia hết";
}
console.log(checkNumber(11));
