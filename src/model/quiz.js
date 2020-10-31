const mongoose = require("mongoose");

const optionSchema = mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   text: {
      type: String,
      required: true,
   },
});

const quizSchema = mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   questions: [
      {
         id: {
            type: String,
            required: true,
         },
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

module.exports = Quiz;
