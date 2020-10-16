/**
 
Error Handling in Express:

https://expressjs.com/en/guide/error-handling.html

 Express comes with a default error handler
 # Errors that occur in synchronous code inside route handlers and middleware require no extra work. 
   If synchronous code throws an error, then Express will catch and process it.(res 500 with body message)
 # For errors returned from asynchronous functions invoked by route handlers and middleware, 
   you must pass them to the next() function, where Express will catch and process them.
 */

const filesManager = require("./utils/filesManager");

const quiz = filesManager.getQuizData();

console.log(quiz);
