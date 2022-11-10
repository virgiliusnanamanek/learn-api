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

module.exports = {
  getStudents,
  getStudentById,
};
