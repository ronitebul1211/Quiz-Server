const mongoose = require("mongoose");

const optionSchema = mongoose.Schema({
   text: {
      type: String,
      required: true,
   },
});

const quizSchema = mongoose.Schema({
   questions: [
      {
         text: {
            type: String,
            required: true,
         },
         options: [
            {
               type: optionSchema,
               required: true,
            },
         ],
      },
   ],
});

const Quiz = mongoose.model("Quiz", quizSchema);

// testQuiz
//    .save()
//    .then((res) => {
//       console.log(res);
//    })
//    .catch((err) => {
//       console.log(err);
//    });

module.exports = Quiz;
