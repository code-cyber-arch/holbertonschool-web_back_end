// Import the 'fs' module to work with the filesystem
const fs = require('fs');

// Function that counts students and groups them by field from a file at a given path
function countStudents(path) {
  let content;

  // Try to read the file synchronously at the given path
  try {
    // Read the file synchronously, and store the content in 'content'
    content = fs.readFileSync(path);
  } catch (err) {
    // If an error occurs while reading the file, throw an error with a message
    throw new Error('Cannot load the database');
  }

  // Convert the file content to a string and split it by newline to create an array of rows
  content = content.toString().split('\n');

  // Filter out any empty lines from the array of rows
  let students = content.filter((item) => item);

  // Split each row by commas to create an array of student data (assuming CSV format)
  students = students.map((item) => item.split(','));

  // Calculate the total number of students by subtracting 1 to account for the header row
  const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;

  // Log the total number of students to the console
  console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

  // Create an object to group students by their field (assumed to be the 4th column)
  const fields = {};
  for (const i in students) {
    if (i !== 0) { // Skip the header row
      // If the field doesn't exist in the object, initialize it with an empty array
      if (!fields[students[i][3]]) fields[students[i][3]] = [];

      // Add the student's name (assumed to be the 1st column) to the appropriate field group
      fields[students[i][3]].push(students[i][0]);
    }
  }

  // Remove the header key "field" from the fields object if it exists
  delete fields.field;

  // Iterate over each field in the fields object
  for (const key of Object.keys(fields)) {
    // Log the number of students in the current field and their names to the console
    console.log(
      `Number of students in ${key}: ${fields[key].length}. List: ${fields[
        key
      ].join(', ')}`,
    );
  }
}

// Export the countStudents function to be used in other modules
module.exports = countStudents;
