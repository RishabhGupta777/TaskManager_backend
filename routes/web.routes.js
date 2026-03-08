const router = require("express").Router();
const { contact } = require("../controller/web.controller");

router.post("/contact", contact);

module.exports = router;