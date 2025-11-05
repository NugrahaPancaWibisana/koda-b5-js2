let belanja = 1e6;

switch (true) {
  case belanja < 5e5:
    console.log(belanja);
  case belanja >= 5e5 && belanja < 1e6:
    console.log(belanja - 0.05 * belanja);
  case belanja > 1e6:
    console.log(belanja - 0.1 * belanja);
}
