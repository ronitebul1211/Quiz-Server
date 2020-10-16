/**
 
Error Handling in Express:

https://expressjs.com/en/guide/error-handling.html

 Express comes with a default error handler
 # Errors that occur in synchronous code inside route handlers and middleware require no extra work. 
   If synchronous code throws an error, then Express will catch and process it.(res 500 with body message)
 # For errors returned from asynchronous functions invoked by route handlers and middleware, 
   you must pass them to the next() function, where Express will catch and process them.
 */
const express = require("express");
const bodyParser = require("body-parser");
const quizFileManager = require("./filesManager/quizFileManager");
const usersConfigFileManager = require("./filesManager/usersConfigFileManager");
const usersIdManager = require("./logic/usersIdManager");
const userManager = require("./logic/userManager");
const userFileManager = require("./filesManager/userFileManager");

const app = express();
app.use(bodyParser.json());

/** Get - response with quiz data in json format */
app.get("/quiz", (req, res) => {
   const quiz = quizFileManager.getQuizData();
   res.send(quiz);
});

/** POST - create new user response with user id */
app.post("/users", (req, res) => {
   const userId = usersIdManager.generateId(usersConfigFileManager.getIdCounter());
   const userName = req.body.name;
   const newUser = userManager.createUser(userId, userName);
   userFileManager.saveUserInFile(newUser);
   //if user data added update value, else value remain for valid user
   usersConfigFileManager.setIdCounter(userId);
   //response with user id
   res.send({ id: userId });
});

app.put("/user/:userId/quiz-results", (req, res) => {
   const userId = parseInt(req.params.userId);
   const userResults = req.body;
   const selectedUser = userFileManager.getUserFromFile(userId);
   const updatedUser = userManager.updateUserQuizResults(selectedUser, userResults);
   userFileManager.updateUserInFile(updatedUser);
   //response with Success message
   res.send("Quiz results added");
});

app.listen(3000, () => {
   console.log("server is up on port 3000 -> init here");
});
