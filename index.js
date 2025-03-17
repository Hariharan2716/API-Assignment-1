// API: Retrieve Students Above Threshold
// ---------------------------------------
// Task:
// Implement an API to fetch students whose total marks exceed a given threshold.
//
// Endpoint:
// POST /students/above-threshold
//
// Request Body:
// {
//   "threshold": <number>
// }
//
// Response:
// Success: List of students with their names and total marks who meet the criteria.
// Example:
// {
//   "count": 2,
//   "students": [
//     { "name": "Alice Johnson", "total": 433 },
//     { "name": "Bob Smith", "total": 410 }
//   ]
// }
//
// No Matches:
// {
//   "count": 0,
//   "students": []
// }
//
// Purpose:
// Help teachers retrieve and analyze student performance efficiently.
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const students = [
  {student_id :"1", name:"Alice Jhonson", marks:{math:98, science:90, english:90,history:90, geography:89 }, total:443 },
  {student_id :"2", name:"Smith James", marks:{math:98, science:89, english:90,history:99, geography:99 }, total:473 },
  {student_id :"3", name:"David Harley", marks:{math:98, science:90, english:90,history:90, geography:89 }, total:463 },
]

app.post('/students/above-threshold',(req, res)=>{
  const {threshold} = req.body;

  if(!threshold || typeof threshold !== 'number'){
    return res.status(400).json({error:"Invalid input. Please provide a valid threshold number. "});

  }
  const filteredStudents = students.filter(student => student.total > threshold);

  res.status(200).json({
    conunt: filteredStudents.length,
    students: filteredStudents.map(student =>({
      name:student.name,
      total:student.total
    }))
  })
})

app.listen(PORT, ()=>{
  console.log(`Server is running at http://localhost:${PORT}`)
})