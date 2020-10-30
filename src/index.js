const express = require("express");
require("./db/mongoose"); // init db
const quizzesRouter = require("./routers/quiz");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(quizzesRouter);

const cors = require("cors");
const bodyParser = require("body-parser");
const quizFileManager = require("./filesManager/quizFileManager");
const usersConfigFileManager = require("./filesManager/usersConfigFileManager");
const usersIdManager = require("./logic/usersIdManager");
const userManager = require("./logic/userManager");
const userFileManager = require("./filesManager/userFileManager");

//TODO: refactor rank function to response without rank if friend didn't answer all questions
//TODO: use destructuring in request body

/** Script added to open nodemon -> npm run dev */

app.use(cors());
app.use(bodyParser.json());

/** Get - response with quiz data in json format */
// app.get("/quiz", (req, res) => {
//    const quiz = quizFileManager.getQuizData();
//    res.send(quiz);
// });

/** POST - create new user, response with user id */
app.post("/users", (req, res) => {
   const userId = usersIdManager.generateId(usersConfigFileManager.getIdCounter());
   const userName = req.body.name;
   const newUser = userManager.createUser(userId, userName);
   userFileManager.saveUserInFile(newUser);
   //if user data added update value, else value remain for valid user
   usersConfigFileManager.setIdCounter(userId);
   res.send({ userId });
});

/** PUT - update user quiz results, response with success message */
app.put("/user/:userId/quiz", (req, res) => {
   const userId = parseInt(req.params.userId);
   const updatedResults = req.body;
   const selectedUser = userFileManager.getUserFromFile(userId);
   userManager.updateUserQuizResults(selectedUser, updatedResults);
   userFileManager.updateUserInFile(selectedUser);
   res.send("Quiz results added");
});

/** POST - create in user friends new friend, response with friend id */
app.post("/user/:userId/friends", (req, res) => {
   const userId = parseInt(req.params.userId);
   const friendName = req.body.name;
   const selectedUser = userFileManager.getUserFromFile(userId);
   const friendId = userManager.addFriend(selectedUser, friendName);
   userFileManager.updateUserInFile(selectedUser);
   res.send({ friendId });
});

/** PUT - update user friend result for specific question, response with user answer */
app.put("/user/:userId/friends/:friendId", (req, res) => {
   const userId = parseInt(req.params.userId);
   const friendId = parseInt(req.params.friendId);
   const questionId = parseInt(req.body.questionId);
   const answerId = parseInt(req.body.answerId);
   const selectedUser = userFileManager.getUserFromFile(userId);
   const userAnswerId = userManager.updateFriendQuizResult(selectedUser, friendId, questionId, answerId);
   userFileManager.updateUserInFile(selectedUser);
   res.send({ userAnswerId });
});

/** GET - get specific user friend rank */
app.get("/user/:userId/friends/:friendId/rank", (req, res) => {
   const userId = parseInt(req.params.userId);
   const friendId = parseInt(req.params.friendId);
   const selectedUser = userFileManager.getUserFromFile(userId);
   const friendRank = userManager.getFriendRank(selectedUser, friendId);
   res.send({ friendRank });
});

/** GET - get specific user ranks */
app.get("/user/:userId/ranks", (req, res) => {
   const userId = parseInt(req.params.userId);
   const selectedUser = userFileManager.getUserFromFile(userId);
   const friendsRanks = userManager.getFriendsRanks(selectedUser);
   res.send({ friendsRanks });
});

app.listen(port, () => {
   console.log(`server is up on port ${port}`);
});
