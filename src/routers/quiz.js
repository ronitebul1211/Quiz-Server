const express = require("express");
const Quiz = require("../model/quiz");

const router = new express.Router();

router.get("/api/quiz", async (req, res) => {
   try {
      const quiz = await Quiz.findOne();
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
