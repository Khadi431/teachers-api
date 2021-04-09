const express = require("express");
const {
  getAllTeachers,
  addTeacher,
  deleteTeacher,
} = require("../controllers/teachersControllers");

const router = express.Router();

router.route("/").get(getAllTeachers).post(addTeacher);
router.route('/:name').delete(deleteTeacher)


module.exports = router;
