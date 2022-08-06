const express = require("express");
const router = express.Router();
const ComplainController = require("../controller/complain-controller");

router.post("/add", ComplainController.addComplain);
router.get("/getComplain", ComplainController.getComplain);
router.put("/update/:id", ComplainController.updateComplain);
router.delete("/delete/:id", ComplainController.deleteComplain);

module.exports = router;
