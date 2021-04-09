const teachers = require("../teachers");

const getAllTeachers = (req, res) => {
  res.json(teachers)
};

const addTeacher = (req, res) => {
  const newTeacher ={
    name: req.body.name,
    age: req.body.age,
    class:req.body.class,
    gender:req.body.gender,
    subject:req.body.subject,
    contact:req.body.contact,
  };
 // if newTeacher
    (
    newTeacher.name||
    newTeacher.age||
    newTeacher.gender||
    newTeacher.subject||
    newTeacher.contact
    )
  {
  res.json(teachers);
  }
};

const deleteTeacher = (req, res) => {
  res.send("teacher deleted");
};

module.exports = { getAllTeachers, addTeacher, deleteTeacher };
