const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const teachers = require("./teachers");
const app = express();

dotenv.config();
app.use(morgan("dev"));
app.use(express.json());

//get all teachers data
app.get("/api/v3/people", (req, res) => {
  res.json(teachers);
});
//single teacher
app.get("/api/v3/people/:name", (req, res) => {
  res.json(teachers.filter((teacher) => teacher.name === req.params.name));
});

//detete a teacher
app.delete("/api/v3/people/:name", (req, res) => {
  res.json(teachers.filter((teacher) => teacher.name !== req.params.name));
});

//updating a teacher
app.put("/api/v3/people/:name", (req, res) => {
  const teacherFound = teachers.some(
    (teacher) => teacher.name === req.params.name
  );
  teacherFound &&
    teachers.forEach((teacher) => {
      teacher.name === req.params.name, (teacher.class = req.body.class);
    });
  res.json(teacher);
});

app.post("/api/v3/people", (req, res) => {
  const teacher = {
    name: req.body.name,
    class: req.body.class,
    subject: req.body.subject,
    gender: req.body.gender,
  };
  teachers.push(teacher);
  res.json(teacher);
});
const PORT = process.env.PORT|| 7000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
