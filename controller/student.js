const db = require('../config/database');
db.connect();

module.exports = {
    getStudents: (req, res) => {
        db.query('SELECT * FROM student', (err, rows, fields) => {
            if(!err) {
                let result = '';
                rows.forEach(row => {
                    result += JSON.stringify(row) + '<br>'
                });
                res.send(result);
            }
            else {
                console.log(err);
            }
        });
    },

    getStudent: (req, res, id) => {
        db.query(`SELECT * FROM student WHERE ID=${id}`, (err, row, fields) => {
            if(!err) {
                res.send(JSON.stringify(row));
            }
            else {
                console.log(err);
            }
        });
    },

    addStudent: (req, res, data) => {
        db.query(`
            INSERT INTO student 
            (ID, Name,Birth,Phonenumber,Email,Department) 
            VALUES
                ("${data.ID}",
                "${data.Name}",
                "${data.Birth}",
                "${data.Phonenumber}",
                "${data.Email}",
                "${data.Department}")
        `, (err, result) => {
            if(!err) {
                res.send('1 record inserted');
            }
            else {
                console.log(err);
            }
        });
    },

    deleteStudent: (req, res, id) => {
        db.query(`DELETE FROM student WHERE ID=${id}`, (err, result) => {
            if(!err) {
                res.send(`id ${id} record deleted`);
            }
            else {
                console.log(err);
            }
        })
    },

    updateStudent: (req, res, id, data) => {
        db.query(`
            UPDATE student 
            SET 
                ID = "${data.ID}",
                Name = "${data.Name}",
                Birth = "${data.Birth}",
                Phonenumber = "${data.Phonenumber}",
                Email = "${data.Email}",
                Department = "${data.Department}" 
            WHERE ID=${id}`
        , (err, result) => {
            if(!err) {
                res.send('1 record inserted');
            }
            else {
                console.log(err);
            }
        });
    }
}