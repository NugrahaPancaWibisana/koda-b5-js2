let belanja = 500;
let diskon;

if (belanja > 0 && belanja < 5e5) {
  diskon = 0;
} else if (belanja >= 5e5 && belanja <= 1e6) {
  diskon = 0.05;
} else if (belanja > 1e6) {
  diskon = 0.1;
} else {
  diskon = 'Invalid price';
}

console.log(belanja - diskon * belanja || diskon);
