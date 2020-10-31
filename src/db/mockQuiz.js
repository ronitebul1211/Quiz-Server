const mongoose = require("mongoose");
const Quiz = require("../model/quiz");

const quizData = {
   __id: "1",
   questions: [
      {
         __id: "1",
         text: "מה המאכל האהוב עלי?",
         options: [
            { __id: "1", text: "המבורגר וצ'יפס" },
            { __id: "2", text: "פיצה אננס" },
            { __id: "3", text: "בן אנד ג'ריס בצק עוגיות" },
            { __id: "4", text: "סלט יווני" },
         ],
      },
      {
         __id: "2",
         text: "מה הצבע האהוב עלי?",
         options: [
            { __id: "1", text: "וורוד פוקסיה" },
            { __id: "2", text: "ירוק תפוח" },
            { __id: "3", text: "כחול שמים" },
            { __id: "4", text: "חרדל" },
         ],
      },
      {
         __id: "3",
         text: "מה סגנון המוזיקה האהוב עלי?",
         options: [
            { __id: "1", text: "קלאסית" },
            { __id: "2", text: "טראנס" },
            { __id: "3", text: "רוק ישראלי" },
            { __id: "4", text: "פופ" },
         ],
      },
      {
         __id: "4",
         text: "מה מקום הבילוי המועדף שלי?",
         options: [
            { __id: "1", text: "הסלון" },
            { __id: "2", text: "פאב" },
            { __id: "3", text: "חוף הים" },
            { __id: "4", text: "מסעדה" },
         ],
      },
      {
         __id: "5",
         text: "איזה חיית מחמד אעדיף לגדל?",
         options: [
            { __id: "1", text: "כלב" },
            { __id: "2", text: "חתול" },
            { __id: "3", text: "דג" },
            { __id: "4", text: "תוכי" },
         ],
      },
   ],
};

const resetQuizzesCollection = async () => {
   try {
      await mongoose.connection.dropCollection("quizzes");
   } catch (err) {
      if (err.code === 26) {
         return console.log("quizzes collection doesn't exist");
      }
      throw err;
   }
};

const insertMockQuiz = async () => {
   await Quiz.create(quizData);
   console.log("insert mock quiz");
};

const init = async () => {
   await resetQuizzesCollection();
   await insertMockQuiz();
};

module.exports = { init };
