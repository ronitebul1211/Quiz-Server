const express = require("express");
const User = require("../model/user");

const router = new express.Router();

/** POST /api/users : create new user with name & email */
router.post("/api/users", async (req, res) => {
   const allowedFields = ["name", "email"];
   const updates = Object.keys(req.body);

   const isValidOperation = updates.every((update) => allowedFields.includes(update));
   if (!isValidOperation) {
      return res.status(400).send("Error: Invalid user creation property");
   }

   const user = new User(req.body);
   try {
      await user.save();
      res.status(201).send(user);
   } catch (err) {
      res.status(500).send(err);
   }
});

/** PATCH /api/users : update quiz */
//TODO: results validation: get quiz by id: compare length, question id, answer id
router.patch("/api/users/:userId/quiz", async (req, res) => {
   try {
      //Get user by id
      const user = await User.findById(req.params.userId);
      if (!user) {
         return res.status(400).send({ error: "Invalid id" });
      }

      //Update user quiz
      const quizId = req.body.id;
      const quizResults = req.body.results;

      await user.updateOne({
         quiz: {
            id: quizId,
            results: [...quizResults],
         },
      });

      res.send(user);
   } catch (err) {
      res.status(500).send(err);
   }
});

module.exports = router;
