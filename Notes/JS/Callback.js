const loadScript = (src, cb) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => cb();
  document.head.append(script);
};

// loadScript("./Demo.js", () => {
//   intro();
//   alert("First Script loaded successfully!");
//   loadScript("./DemoTwo.js", () => {
//     alert("Second Script loaded successfully!");
//   });
// });

const loadScriptPromiseVersion = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Something went wrong!"));
    document.head.append(script);
  });
};

const p = loadScriptPromiseVersion("./Demo.js");
p.then((result) => {
  alert(`${result} is loaded`);
}).catch((err) => {
  alert(err);
});

console.log("After calling loadScript function");
