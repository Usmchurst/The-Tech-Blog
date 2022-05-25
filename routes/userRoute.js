const express = require("express");
const router = express.Router();
const auth = require('../utils/auth');
const {
  getSigninHandlebar,
  userSignIn,
  getUserSignUpHandlerbar,
  createUser,
  userLogout,
} = require("../controllers/api");


router.get("/user/signin",getSigninHandlebar);
router.post("/user/signin", userSignIn);
router.get("/user/signup", getUserSignUpHandlerbar);
router.post("/user/signup", createUser);
router.get("/user/logout", userLogout);

module.exports = router;