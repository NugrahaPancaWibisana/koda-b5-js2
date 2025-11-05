let belanja = 1e6;

switch (true) {
  case belanja > 0 && belanja < 5e5:
    console.log(belanja);
    break;
  case belanja >= 5e5 && belanja <= 1e6:
    console.log(belanja - 0.05 * belanja);
    break;
  case belanja > 1e6:
    console.log(belanja - 0.1 * belanja);
    break;
  default:
    console.log('Invalid price');
}
