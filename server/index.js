const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "diary",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const role = req.body.role;

  db.query(
    "INSERT INTO users (name, age, role) VALUES (?,?,?)",
    [name, age, role],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users WHERE users.deleted = 0", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// app.put("/update", (req, res) => {
//   const id = req.body.id;
//   const wage = req.body.wage;
//   db.query(
//     "UPDATE employees SET wage = ? WHERE id = ?",
//     [wage, id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//       } else {
//         res.send(result);
//       }
//     }
//   );
// });

// app.delete("/delete/:id", (req, res) => {
//   const id = req.params.id;
//   db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.send(result);
//     }
//   });
// });

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});








// const express = require('express');
// const app = express();
// const mysql = require('mysql');

// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: 'password',
//     database: 'diary'
// });

// app.get("/", (req, res)=> {
//     const sqlInsert = "INSERT INTO people (name, role) VALUES ('Men in BLACK', 'student')";
//     db.query(sqlInsert, (error, result) => {
//         res.send("HELLOO BRO!");
//     })
// })

// app.listen(3000, () => {
//     console.log('running on port 3001');
// });