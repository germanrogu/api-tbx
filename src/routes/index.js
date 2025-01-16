const express = require("express");
const {
  getFilesData,
  getFileList,
} = require("../controllers/filesControllers");

const router = express.Router();

router.get("/list", getFileList);

router.get("/data", getFilesData);

module.exports = router;
