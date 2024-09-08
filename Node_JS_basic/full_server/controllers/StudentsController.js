import readDatabase from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const path = process.argv[2];
      const fields = await readDatabase(path);
      let response = 'This is the list of our students\n';

      Object.keys(fields).sort((a, b) => a
        .toLowerCase()
        .localeCompare(b.toLowerCase()))
        .forEach((field) => {
          response += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        });

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    try {
      const path = process.argv[2];
      const fields = await readDatabase(path);
      const list = fields[major] || [];
      res.status(200).send(`List: ${list.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
