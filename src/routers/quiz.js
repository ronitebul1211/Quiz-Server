const express = require("express");
const Quiz = require("../model/quiz");

const router = new express.Router();

router.get("/api/quiz", async (req, res) => {
   try {
      const quiz = await Quiz.findOne().select("-_id -questions._id -questions.options._id");
      if (!quiz) {
         throw new Error("Mock Quiz not available");
      }
      res.send(quiz);
   } catch (err) {
      res.status(500).send("Server Error");
      console.log(err);
   }
});

module.exports = router;
