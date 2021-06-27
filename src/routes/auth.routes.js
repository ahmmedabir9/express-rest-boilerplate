const { Router } = require("express");
const { login, reAuth, register } = require("../controllers/auth.controller");

const router = Router();

//api: url/auth/__

//login
router.post("/login", login);

//register
router.post("/register", register);

//re-auth
router.post("/reauth", reAuth);

module.exports = router;
