const express = require("express");
const teachersRoutes = require('./routes/teachersRoutes');
const teachers = require("./teachers");
const app = express()

const PORT = 4000
app.use(express.json())

app.use('/api/v1/teachers',teachersRoutes)

// app.get("/api/v1", (req, res) => {
//   res.json(teachers)
// });

app.listen(PORT,()=>{
    console.log(`Server started on port:${PORT}`)
})
