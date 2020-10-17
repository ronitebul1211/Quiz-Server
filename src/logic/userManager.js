const createUser = (id, name) => {
   //TODO:throw if id!=number, name!=string
   const newUser = {
      id,
      name,
      quizResults: initQuizResults(),
      friends: [],
   };
   return newUser;
};

const updateUserQuizResults = (user, resultsToUpdate) => {
   //TODO:throw if result.length!= quiz length, answerId + questionId (number, check if possible to parse else throw)
   user.quizResults.forEach((result) => {
      const matchResult = resultsToUpdate.find(
         (resultToUpdate) => result.questionId === resultToUpdate.questionId,
      );
      if (matchResult) {
         if (matchResult.answerId > 0 && matchResult.answerId <= 4) {
            result.answerId = matchResult.answerId;
         } else {
            throw Error(
               `answer id for question id: ${matchResult.questionId}, should be a number between 1-4`,
            );
         }
      } else {
         throw Error("results is an array with 4 result object, questionId is unique number between 0-3");
      }
   });
   return user;
};

const addFriend = (user, friendName) => {
   //TODO:throw if name!=string
   const friend = {
      id: user.friends.length,
      name: friendName,
      quizResult: initQuizResults(),
   };
   user.friends.push(friend);
   return { updatedUser: user, friendId: friend.id };
};

/** inner */
const initQuizResults = (quizId = 0) => {
   //TODO: hardcoded: modify to init dynamically by quiz id
   const quizResult = [];
   for (let i = 0; i < 4; i++) {
      quizResult.push({ questionId: i, answerId: 0 });
   }
   return quizResult;
};

module.exports = {
   createUser,
   updateUserQuizResults,
   addFriend,
};
