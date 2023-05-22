const { Router } = require("express");
const UsersDao = require("../DAOs/Users.dao");

const Users = new UsersDao
const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await Users.getAll();
    res.json({ mesage: users });
  } catch (error) {
    res.status(400).json({ error });
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

    const user = await Users.insertOne(newUserInfo);

    res.status(201).json({ status: "success", message: user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
});

router.delete("/", async (req, res) => {
  try {
    const { id } = req.params;
    const userDelete = await Users.deleteAllOnlyForDevs(id);
    res.status(201).json({ status: "se elimino usuario", mesage: userDelete });
  } catch (error) {
    console.log(error.mesage);
    res.status(500).json({ status: "error", error: "Internal server error" });
  }
});

module.exports = router;
