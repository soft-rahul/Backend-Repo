# What is Asynchronous Programming in Js?

<p> Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result. </p>

# Synchronous Programming & Problems associated with long running synchronous tasks.

# Timers in Js

## Types of Timers in Js

## setTimeout

  <p> The global setTimeout() method sets a timer which executes a function or specified piece of code once the timer expires. </p>
  <p> This takes up to three parameters
   <ol>
   <li> function or Code </li>
    <li> Delay </li>
     <li> parameters </li>
  </p>

## Return value - Timer Id ( positive Int)

## clearTimeout()

  <p> The global clearTimeout() method cancels a timeout previously established by calling setTimeout().

If the parameter provided does not identify a previously established action, this method does nothing.</p>

## setInterval()

<p> The setInterval() method, offered on the Window and WorkerGlobalScope interfaces, repeatedly calls a function or executes a code snippet, with a fixed time delay between each call.

This method returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval().</p>

<p> This takes up to three parameters
   <ol>
   <li> function or Code </li>
    <li> Delay </li>
     <li> parameters </li>
  </p>

## clearInterval()

<p> The global clearInterval() method cancels a timed, repeating action which was previously established by a call to setInterval(). If the parameter provided does not identify a previously established action, this method does nothing.</p>

# Asynchronous Techniques

## Callbacks

## Promise

- Producing Code
- Consuming Code

<p> A promise is a special JavaScript object that links the “producing code” and the “consuming code” together. </p>

### Syntax

`
const promise = new Promise((resolve,reject)=>{

    // logic here

})
`

The function passed to new Promise is called the <strong>executor </strong>. When new Promise is created, the executor runs automatically.

Its arguments <b> resolve </b> and <b> reject </b>are callbacks provided by JavaScript itself.

So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

### Return value of Promise constructor
The promise object returned by the new Promise constructor has these internal properties:

<b>state</b> — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
<b> result </b> — initially undefined, then changes to value when resolve(value) is called or error when reject(error) is called.


## The executor should call only one resolve or one reject. Any state change is final.

All further calls of resolve and reject are ignored:
<code>
let promise = new Promise(function(resolve, reject) {
  resolve("done");

  reject(new Error("…")); // ignored
  setTimeout(() => resolve("…")); // ignored
});
</code>
The idea is that a job done by the executor may have only one result or an error.

Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.


### then() & catch()
A Promise object serves as a link between the executor (“producing code”) and the consuming functions , which will receive the result or error. Consuming functions can be registered using the methods <b>.then and .catch. </b>

### .then()
The most important, fundamental one is .then.

The syntax is:
<code>
promise.then(
  function(result) { /* handle a successful result */ },
  function(error) { /* handle an error */ }
);
</code>
The first argument of .then is a function that runs when the promise is resolved and receives the result.

The second argument of .then is a function that runs when the promise is rejected and receives the error.

### .catch()
The call .catch(f) is a complete analog of .then(null, f), it’s just a shorthand.

### .finally()

The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.

E.g. stopping loading indicators, closing no longer needed connections, etc.

To summarize:

- A finally handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.
  
- If a finally handler returns something, it’s ignored.
  
- When finally throws an error, then the execution goes to the nearest error handler.