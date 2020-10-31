const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
   question_id: {
      type: String,
      required: true,
   },
   answer_id: {
      type: String,
      required: true,
   },
});

const quizSchema = new mongoose.Schema({
   id: {
      type: String,
      required: true,
   },
   results: [
      {
         type: resultSchema,
      },
   ],
});

const userSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      trim: true,
   },
   email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      lowercase: true,
   },
   quiz: {
      type: quizSchema,
   },
});

/** Expose: _id, name, email */
userSchema.methods.toJSON = function () {
   const user = this;
   const userObject = user.toObject();

   delete userObject.quiz;

   return userObject;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
