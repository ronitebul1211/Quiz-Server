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

const updateUserQuizResults = (user, results) => {
   //TODO:throw if result.length!=5,  0 > question id > 5, 1> answer id > 4, same question id
   user.quizResults = results;
   return user;
};

module.exports = {
   createUser,
   updateUserQuizResults,
};
