/** Exported - Create new user */
const createUser = (id, name) => {
   const newUser = {
      id,
      name,
      quiz: initQuiz(4),
      friends: [],
   };
   return newUser;
   //TODO:throw if id!=number, name!=string
};

/** Exported - Update user quiz with updated result */
const updateUserQuizResults = (user, updatedResults) => {
   updatedResults.forEach((updatedResult) => {
      const matchResult = getResult(user.quiz, updatedResult.questionId);
      setAnswer(matchResult, updatedResult.answerId);
   });
};

/** Exported - Add friend to user */
const addFriend = (user, friendName) => {
   const friend = {
      id: user.friends.length,
      name: friendName,
      quiz: initQuiz(4),
      rightAnswers: 0,
   };
   user.friends.push(friend);
   return friend.id;
   //TODO:throw if name!=string
};

/** Exported - update specific answer in friend quiz */
const updateFriendQuizResult = (user, friendId, questionId, answerId) => {
   const friend = getFriend(user, friendId);
   const friendResult = getResult(friend.quiz, questionId);
   setAnswer(friendResult, answerId);
   const userResult = getResult(user.quiz, questionId);
   updateFriendRank(friend, friendResult, userResult);
   return userResult.answerId;
};

/** Exported - Return specific friend rank */
const getFriendRank = (user, friendId) => {
   const friend = getFriend(user, friendId);
   const friendRank = getRank(friend);
   return friendRank;
};

/** Exported - Return friends ranks */
const getFriendsRanks = (user) => {
   const friendsRank = user.friends.map((friend) => getRank(friend));
   return friendsRank;
};

/** Return rank object */
const getRank = (friend) => {
   const rank = {
      friendId: friend.id,
      friendName: friend.name,
      rightAnswers: friend.rightAnswers,
      totalQuestions: friend.quiz.length,
   };
   return rank;
};

/** Update friend right answers counter when his answer identical to user answer */
const updateFriendRank = (friend, friendResult, userResult) => {
   if (userResult.answerId === friendResult.answerId) {
      friend.rightAnswers += 1;
   }
};

/** Return friend from friends array by its id */
const getFriend = (user, friendId) => {
   const friend = user.friends.find((friend) => friend.id === friendId);
   if (!friend) {
      throw Error("Friend ID Not exist");
   }
   return friend;
};

/** Return result ({ questionId: num, questionId: num }) by question id */
const getResult = (quiz, questionId) => {
   const result = quiz.find((result) => result.questionId === questionId);
   if (!result) {
      throw Error("Question ID Not exist");
   }
   return result;
};

/** Set answer id to specific result */
const setAnswer = (result, answerId) => {
   if (answerId <= 0 || answerId >= 5) {
      throw Error("Answer ID Not exist");
   }
   result.answerId = answerId;
};

/** Return quiz array contain result object contain answer id set to 0 (no answer), question id */
const initQuiz = (questionCount) => {
   const quizResult = [];
   for (let i = 0; i < questionCount; i++) {
      quizResult.push({ questionId: i, answerId: 0 });
   }
   return quizResult;
};

module.exports = {
   createUser,
   updateUserQuizResults,
   addFriend,
   updateFriendQuizResult,
   getFriendRank,
   getFriendsRanks,
};
