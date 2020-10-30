const mongoose = require("mongoose");
const mockQuiz = require("./mockQuiz");

mongoose.connect("mongodb://127.0.0.1:27017/quiz-manager-api", {
   useNewUrlParser: true,
   useCreateIndex: true,
   useUnifiedTopology: true,
});

mockQuiz.init();
