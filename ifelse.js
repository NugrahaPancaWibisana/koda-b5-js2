let belanja = 1.5e6;

if (belanja < 5e5) {
  console.log(belanja);
} else if (belanja >= 5e5 && belanja <= 1e6) {
  console.log(belanja - 0.05 * belanja);
} else if (belanja > 1e6) {
  console.log(belanja - 0.1 * belanja);
}
