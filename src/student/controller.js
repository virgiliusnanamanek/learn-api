const pool = require("../../db");
const queries = require("./queries");

const getStudents = (req, res) => {
  pool.query(queries.getAllStudents, (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getStudentById, [id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).json(results.rows);
  });
};

const addNewStudent = (req, res) => {
  const { name, email, age, dob } = req.body; // destructuring the request body

  pool.query(queries.isEmailExists, [email], (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.status(409).json({ message: "Email already exists" });
    } else {
      pool.query(queries.isNameExists, [name], (err, results) => {
        if (err) {
          throw err;
        }

        if (results.rows.length > 0) {
          res.status(409).json({ message: "Name already exists" });
        } else {
          pool.query(
            queries.addNewStudent,
            [name, email, age, dob],
            (err, results) => {
              if (err) {
                throw err;
              }
              res.status(201).json({ message: "Student added successfully" });
            }
          );
        }
      });
    }
  });
};

module.exports = {
  getStudents,
  getStudentById,
  addNewStudent,
};
