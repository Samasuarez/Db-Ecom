const { Router } = require("express");
const Users = require("../models/users.models.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.find();
    res.json({ mesage: users });
  } catch (error) {
    res.status(400).json({error});
  }
});

router.post("/", async (req, res) => {
  try {
    const { first_name, last_name, email, age, password } = req.body;
    const newUserInfo = {
      first_name,
      last_name,
      email,
      age,
      password,
    };

    const user = await Users.create(newUserInfo);

    res.status(201).json({ status: "success", message: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
});

module.exports = router;
