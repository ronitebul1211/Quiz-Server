const express = require("express");
const User = require("../model/user");

const router = new express.Router();

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

module.exports = router;
