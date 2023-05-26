const { Router } = require("express");

const PostController = require("./src/controller/PostController");

const router = Router();

router.get("/", PostController.index);

module.exports = router;
