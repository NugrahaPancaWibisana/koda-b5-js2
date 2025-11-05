let belanja = 500;
let diskon;

switch (true) {
  case belanja > 0 && belanja < 5e5:
    diskon = 0;
    break;
  case belanja >= 5e5 && belanja <= 1e6:
    diskon = 0.05;
    break;
  case belanja > 1e6:
    diskon = 0.1;
    break;
  default:
    diskon = 'Invalid price';
}

console.log(belanja - diskon * belanja || diskon);
