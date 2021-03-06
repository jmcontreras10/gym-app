var express = require("express");
var router = express.Router();

const uc = require("../controllers/user");

/* POST: Add a new User */
router.post("/add", uc.postAddUser);
router.post("/login", uc.login);

/* GET: get all Users */
router.get("/list", uc.getAllUsers);

/* GET: Get a set of Users by filter */
router.get("/get", uc.getUsersByFilter);

/* PUT: Modify User info */
router.put("/update", uc.modifyUserById);

/* DELETE: Delete Users */
router.delete("/delete", uc.deleteyUsersById);

module.exports = router;
