const { Router } = require("express");
const privateAccess = require("../middleware/private.acces.middleware");
const publicAccess = require("../middleware/public.acces.middleware");

const router = Router();0

router.get("/", privateAccess, (req, res) => {
  const { user } = req.session;
  res.render("profile.handlebars", { user });
});

router.get("/signup", publicAccess, (req, res) => {
  res.render("signup.handlebars");
});

router.get("/login", publicAccess, (req, res) => {
  res.render("login.handlebars");
});

module.exports = router;
