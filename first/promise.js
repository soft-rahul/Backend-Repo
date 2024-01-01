const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Testing rejection'));
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 3000);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(4);
  }, 4000);
});

const promiseSettled = Promise.allSettled([p1, p2, p3, p4]);
console.log("promiseSettled :", promiseSettled);

promiseSettled
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// const promiseAll = Promise.all([p1, p2, p3, p4]);
// console.log(promiseAll);

// promiseAll.then(result => console.log(result)).catch(err => console.log(err))

// const promise = new Promise((resolve, reject) => {
//   throw new Error("!Error");
// });

// promise
//   .then((value) => {
//     console.log(value);
//     return value * 10;
//   })
//   .then((value2) => {
//     console.log(value2);
//     return value2 * 100;
//   })
