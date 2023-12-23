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