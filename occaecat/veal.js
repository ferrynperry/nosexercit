switch (x) {
  .addCase(1, () => console.log('x is 1'));
  .addCase(2, () => console.log('x is 2'));
  .addCase(3, () => console.log('x is 3'));
  default:
    console.log('default');
}
