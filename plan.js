/**
 Working plan:

 */

const quiz = [
   {
      id: 0,
      question: "text",
      answers: [
         { answerId: 1, text: "what is yo" },
         { answerId: 2, text: "answer1" },
         { answerId: 3, text: "answer1" },
         { answerId: 4, text: "answer1" },
      ],
   },
];

/**
 Quiz: saved in JSON file data directory 
   GET /quiz -> res with all Quiz data
*/

const user = {
   id: 0,
   name: "ron",
   quizResults: [
      { questionId: 0, answerId: 0 },
      { questionId: 1, answerId: 0 },
      { questionId: 2, answerId: 0 },
      { questionId: 3, answerId: 0 },
      { questionId: 4, answerId: 0 },
   ],
   friendsQuizResults: [
      {
         id: 0,
         name: "shani",
         quizResult: [
            { questionId: 0, answerId: 1 },
            { questionId: 1, answerId: 1 },
            { questionId: 2, answerId: 1 },
            { questionId: 3, answerId: 1 },
            { questionId: 4, answerId: 1 },
         ],
      },
      {
         id: 1,
         name: "laura",
         quizResult: [
            { questionId: 0, answerId: 1 },
            { questionId: 1, answerId: 1 },
            { questionId: 2, answerId: 1 },
            { questionId: 3, answerId: 1 },
            { questionId: 4, answerId: 1 },
         ],
      },
   ],
};

/**
 Users: each user saved in separate file, file name = user id
 (add some config file to save the last used id and class rep)
 
   POST /user {name:""} -> {id: 0, name"", quizResult: [],friendsQuizResults[] "} -> return user id

    const userJson = data.getUserData(0);


   PUT /user/:id/quiz-results -> 
   req data:
      [ 
         { questionId: 0, answerId: 3 },  
         { questionId: 1, answerId: 2 },  
         { questionId: 2, answerId: 1 },  
         { questionId: 3, answerId: 1 },
         { questionId: 4, answerId: 1 },
      ]

  POST /user/:id/friends-quiz-results -> {id: 0, name: "ccc", quizResult: []} return friend id
 
  POST /user/:id/friends-quiz-results/:friendId -> return {userAnswerId: 0}
     { questionId: 0, answerId: 3 },  
    push to quiz results.

  GET /user/:id/friends-quiz-results/ranks -> res all ranks
  {
    userId:0,
    name: "",
    rightAnswers: 4
    wrongAnswers: 5
  }

*/
