function taxiFare(km) {
  if (isNaN(km) || km <= 0) {
    return "Invalid ";
  } else if (km > 0 && km <= 1) {
    postage = 5000;
  } else if (km <= 30) {
    postage = 5000 + (km - 1) * 4000;
  } else {
    postage = 5000 + 4 * 4000 + (km - 30) * 3000;
  }
  return postage;
}

console.log(taxiFare(30));
