const getAllStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const addNewStudent =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const isEmailExists = "SELECT * FROM students WHERE email = $1";
const isNameExists = "SELECT * FROM students WHERE name = $1";

module.exports = {
  getAllStudents,
  getStudentById,
  addNewStudent,
  isEmailExists,
  isNameExists,
};
