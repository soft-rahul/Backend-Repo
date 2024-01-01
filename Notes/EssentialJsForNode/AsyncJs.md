# What is Nodejs?
## Node js is a open-source, free, async and event driven js runtime env.
## It uses JS V8-engine.
## It is very fast.
## We can use latest JS features in nodejs without any problem.

### How to install and Manage Nodejs?
 We can use nvm tool for this.


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

# Understanding Callbacks
Callbacks are just functions.

## Types of function
### 1. function Declaration
<pre>
<code>
    function fnName(para1,para2) {
        // function body
    }
</code>
</pre>

### 2. function expression
<pre>
<code>
    const fn = function() {

    }

</code>
</pre>
            or

<pre>
<code>
    const fn = () => {
        // body of function
    }
</code>
</pre>

### 3. Callback functions
#### Callbacks are just functions passed into other functions as arguments

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
![](../Images/Screenshot%20(540).png)
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

![](../Images/Screenshot%20(541).png)

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

## Promises Chaining

It looks like this:
<pre>
<code>
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000); // (*)

}).then(function(result) { // (**)

  alert(result); // 1
  return result * 2;

}).then(function(result) { // (***)

  alert(result); // 2
  return result * 2;

}).then(function(result) {

  alert(result); // 4
  return result * 2;

});
</code>
</pre>
The idea is that the result is passed through the chain of .then handlers.

Here the flow is:

![](../Images/Screenshot%20(543).png)

* The initial promise resolves in 1 second (1*),
* Then the .then handler is called (2*), which in turn creates a new promise (resolved with 2 value).
* The next then (***) gets the result of the previous one, processes it (doubles) and passes it to the next handler.
…and so on.

As the result is passed along the chain of handlers, we can see a sequence of alert calls: 1 → 2 → 4.


The whole thing works, because every call to a .then returns a new promise, so that we can call the next .then on it.

When a handler returns a value, it becomes the result of that promise, so the next .then is called with it.

A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

For example:
<pre><code>
let promise = new Promise(function(resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function(result) {
  alert(result); // 1
  return result * 2;
});
</code> </pre>
What we did here is just adding several handlers to one promise. They don’t pass the result to each other; instead they process it independently.

Here’s the picture (compare it with the chaining above):
![](../Images/Screenshot%20(544).png)


All .then on the same promise get the same result – the result of that promise. So in the code above all alert show the same: 1.

In practice we rarely need multiple handlers for one promise. Chaining is used much more often.


## Returning promises
A handler, used in .then(handler) may create and return a promise.

In that case further handlers wait until it settles, and then get its result.

For instance:
<pre> <code>
new Promise(function(resolve, reject) {

  setTimeout(() => resolve(1), 1000);

}).then(function(result) {

  alert(result); // 1

  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) { // (**)

  alert(result); // 2

  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });

}).then(function(result) {

  alert(result); // 4

});
</code> </pre>
Here the first .then shows 1 and returns new Promise(…) in the line (*). After one second it resolves, and the result (the argument of resolve, here it’s result * 2) is passed on to the handler of the second .then. That handler is in the line (**), it shows 2 and does the same thing.

So the output is the same as in the previous example: 1 → 2 → 4, but now with 1 second delay between alert calls.

Returning promises allows us to build chains of asynchronous actions.

#### As a good practice, an asynchronous action should always return a promise. That makes it possible to plan actions after it; even if we don’t plan to extend the chain now, we may need it later.

![](../Images/Screenshot%20(545).png)


## Error handling with promises


Promise chains are great at error handling. When a promise rejects, the control jumps to the closest rejection handler. That’s very convenient in practice.

For instance, in the code below the URL to fetch is wrong (no such site) and .catch handles the error:

<pre> <code>
fetch('https://no-such-server.blabla') // rejects
  .then(response => response.json())
  .catch(err => alert(err)) // TypeError: failed to fetch (the text may vary)
</code> </pre>
As you can see, the .catch doesn’t have to be immediate. It may appear after one or maybe several .then.


## Re-throwing Error

## Unhandled rejections
What happens when an error is not handled? For instance, we forgot to append .catch to the end of the chain, like here:

<pre> <code>
new Promise(function() {
  noSuchFunction(); // Error here (no such function)
})
  .then(() => {
    // successful promise handlers, one or more
  }); // without .catch at the end!

 </code> </pre> 
In case of an error, the promise becomes rejected, and the execution should jump to the closest rejection handler. But there is none. So the error gets “stuck”. There’s no code to handle it.

In practice, just like with regular unhandled errors in code, it means that something has gone terribly wrong.

What happens when a regular error occurs and is not caught by try..catch? The script dies with a message in the console. A similar thing happens with unhandled promise rejections.

The JavaScript engine tracks such rejections and generates a global error in that case. You can see it in the console if you run the example above.

In the browser we can catch such errors using the event unhandledrejection:

<pre> <code>
window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function() {
  throw new Error("Whoops!");
}); // no catch to handle the error
The event is the part of the HTML standard.

</code> </pre>

If an error occurs, and there’s no .catch, the unhandledrejection handler triggers, and gets the event object with the information about the error, so we can do something.

Usually such errors are unrecoverable, so our best way out is to inform the user about the problem and probably report the incident to the server.

In non-browser environments like Node.js there are other ways to track unhandled errors.


# Promise API

There are 6 static methods in the Promise class.

## Promise.all()

Let’s say we want many promises to execute in parallel and wait until all of them are ready.

For instance, download several URLs in parallel and process the content once they are all done.

That’s what Promise.all is for.

The syntax is:
<pre> <code>
let promise = Promise.all(iterable);
Promise.all takes an iterable (usually, an array of promises) and returns a new promise.
</code> </pre>
The new promise resolves when all listed promises are resolved, and the array of their results becomes its result.

For instance, the Promise.all below settles after 3 seconds, and then its result is an array [1, 2, 3]:

<pre> <code>
Promise.all([
  new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
  new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
  new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
]).then(alert); // 1,2,3 when promises are ready: each promise contributes an array member
</code> </pre>
Please note that the order of the resulting array members is the same as in its source promises. Even though the first promise takes the longest time to resolve, it’s still first in the array of results.

#### If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.

![](../Images/Screenshot%20(546).png)


## Promise.allSettled

Promise.allSettled just waits for all promises to settle, regardless of the result. The resulting array has:
<pre> 
<code>
{status:"fulfilled", value:result} for successful responses,
{status:"rejected", reason:error} for errors.

</code>
</pre>