async function specialFunction() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Await is Waiting!");
    }, 3000);
  });

  let resultOfPromise = await promise;
  console.log(resultOfPromise);

  return resultOfPromise;
}

specialFunction()
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

// console.log("1");
// setTimeout(() => {
//   console.log("One - Set Timeout");
// }, 3000);
// const promise = Promise.resolve("Promsie Fullfilled!");

// promise
//   .then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve("Promise Resolved Again!");
//       }, 4000);
//     });
//   })
//   .then((result) => console.log(result));

// console.log("2");

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(new Error('Testing rejection'));
//   }, 2000);
// });
// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(3);
//   }, 3000);
// });
// const p4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(4);
//   }, 4000);
// });

// const promiseSettled = Promise.allSettled([p1, p2, p3, p4]);
// console.log("promiseSettled :", promiseSettled);

// promiseSettled
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

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
