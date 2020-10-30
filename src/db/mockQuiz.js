const mongoose = require("mongoose");
const Quiz = require("../model/quiz");

const quizData = {
   questions: [
      {
         text: "מה המאכל האהוב עלי?",
         options: [
            { text: "המבורגר וצ'יפס" },
            { text: "פיצה אננס" },
            { text: "בן אנד ג'ריס בצק עוגיות" },
            { text: "סלט יווני" },
         ],
      },
      {
         text: "מה הצבע האהוב עלי?",
         options: [{ text: "וורוד פוקסיה" }, { text: "ירוק תפוח" }, { text: "כחול שמים" }, { text: "חרדל" }],
      },
      {
         text: "מה סגנון המוזיקה האהוב עלי?",
         options: [{ text: "קלאסית" }, { text: "טראנס" }, { text: "רוק ישראלי" }, { text: "פופ" }],
      },
      {
         text: "מה מקום הבילוי המועדף שלי?",
         options: [{ text: "הסלון" }, { text: "פאב" }, { text: "חוף הים" }, { text: "מסעדה" }],
      },
      {
         text: "איזה חיית מחמד אעדיף לגדל?",
         options: [{ text: "כלב" }, { text: "חתול" }, { text: "דג" }, { text: "תוכי" }],
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
};

const init = async () => {
   await resetQuizzesCollection();
   await insertMockQuiz();
};

module.exports = { init };
