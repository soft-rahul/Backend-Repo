const promise = new Promise((resolve, reject) => {
  throw new Error("!Error");
});

promise
  .then((value) => {
    console.log(value);
    return value * 10;
  })
  .then((value2) => {
    console.log(value2);
    return value2 * 100;
  })

