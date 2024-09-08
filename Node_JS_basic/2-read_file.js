// Import the 'fs' module to work with the filesystem
const fs = require('fs');

// Function that counts students and groups them by field from a file at a given path
function countStudents(path) {
  // Return a new Promise to handle asynchronous file reading
  return new Promise((resolve, reject) => {
    // Read the file at the given path in UTF-8 encoding
    fs.readFile(path, 'utf8', (err, data) => {
      // If an error occurs while reading the file, reject the promise with an error message
      if (err) {
        reject(Error('Cannot load the database'));
        return;
      }

      // Initialize an array to store the response messages
      const response = [];
      let msg;

      // Convert the file data to a string and split it by newline to create an array of rows
      const content = data.toString().split('\n');

      // Filter out any empty lines from the array of rows
      let students = content.filter((item) => item);

      // Split each row by commas to create an array of student data (assuming CSV format)
      students = students.map((item) => item.split(','));

      // Calculate the total number of students by subtracting 1 to account for the header row
      const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;

      // Create a message with the total number of students and log it to the console
      msg = `Number of students: ${NUMBER_OF_STUDENTS}`;
      console.log(msg);

      // Add the message to the response array
      response.push(msg);

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
        // Create a message with the no. of studs in the current field and their names, and log it
        msg = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`;
        console.log(msg);

        // Add the message to the response array
        response.push(msg);
      }

      // Resolve the promise with the response array containing all the messages
      resolve(response);
    });
  });
}

// Export the countStudents function to be used in other modules
module.exports = countStudents;
