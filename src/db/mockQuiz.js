const mongoose = require("mongoose");
const Quiz = require("../model/quiz");

const quizData = {
   id: "1",
   questions: [
      {
         id: "1",
         text: "מה המאכל האהוב עלי?",
         options: [
            { id: "1", text: "המבורגר וצ'יפס" },
            { id: "2", text: "פיצה אננס" },
            { id: "3", text: "בן אנד ג'ריס בצק עוגיות" },
            { id: "4", text: "סלט יווני" },
         ],
      },
      {
         id: "2",
         text: "מה הצבע האהוב עלי?",
         options: [
            { id: "1", text: "וורוד פוקסיה" },
            { id: "2", text: "ירוק תפוח" },
            { id: "3", text: "כחול שמים" },
            { id: "4", text: "חרדל" },
         ],
      },
      {
         id: "3",
         text: "מה סגנון המוזיקה האהוב עלי?",
         options: [
            { id: "1", text: "קלאסית" },
            { id: "2", text: "טראנס" },
            { id: "3", text: "רוק ישראלי" },
            { id: "4", text: "פופ" },
         ],
      },
      {
         id: "4",
         text: "מה מקום הבילוי המועדף שלי?",
         options: [
            { id: "1", text: "הסלון" },
            { id: "2", text: "פאב" },
            { id: "3", text: "חוף הים" },
            { id: "4", text: "מסעדה" },
         ],
      },
      {
         id: "5",
         text: "איזה חיית מחמד אעדיף לגדל?",
         options: [
            { id: "1", text: "כלב" },
            { id: "2", text: "חתול" },
            { id: "3", text: "דג" },
            { id: "4", text: "תוכי" },
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
