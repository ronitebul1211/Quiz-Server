/**
 readFile vs readFileSync
 https://stackoverflow.com/questions/17604866/difference-between-readfile-and-readfilesync
 you should never call readFileSync in a node express/webserver since it will tie up the single thread loop while I/O is performed.
 */

const fs = require("fs");
const path = require("path");

//TODO: refactor: # use async function # error handling

/** Get quiz object contain quiz data */
const getQuizData = () => {
   const quizBuffer = fs.readFileSync(path.resolve(__dirname, "../../data/quiz/quiz.json"));
   const quizJson = quizBuffer.toString();
   return JSON.parse(quizJson);
};

module.exports = {
   getQuizData,
};
