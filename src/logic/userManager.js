const { findNodeModule } = require("jest-resolve");

const createUser = (id, name) => {
   //TODO:throw if id!=number, name!=string
   const newUser = {
      id,
      name,
      quizResults: [],
      friendsQuizResults: [],
   };
   return newUser;
};

module.exports = {
   createUser,
};
