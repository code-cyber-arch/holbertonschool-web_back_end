const express = require('express');

const args = process.argv.slice(2); // Capture command-line arguments after the first two elements
const countStudents = require('./3-read_file_async'); // Import the countStudents function from the specified file

const DATABASE = args[0]; // Get the database path from the command-line arguments

const app = express(); // Initialize an Express application
const port = 1245; // Set the port for the server

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello Holberton School!'); // Send a response for the root URL
});

// Define a route for the /students URL
app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n'; // Initial message
  try {
    const students = await countStudents(DATABASE); // Get the list of students asynchronously
    res.send(`${msg}${students.join('\n')}`); // Send the message along with the list of students
  } catch (error) {
    res.send(`${msg}${error.message}`); // Handle and send any errors that occur
  }
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Server is now running and listening for requests
});

module.exports = app; // Export the app for use in other files
