const db = require('../config/database');

module.exports = {
    getProfessors: (req, res) => {
        db.query(`
            SELECT 
                professor.ID, 
                professor.Name, 
                department.Name AS Department
            FROM professor 
            LEFT JOIN department ON department.ID=professor.DID`, (err, rows, fields) => {
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

    getProfessor: (req, res, id) => {
        db.query(`
            SELECT 
                professor.ID, 
                professor.Name, 
                department.Name as Department
            FROM professor
            LEFT JOIN department ON department.ID=professor.DID
            WHERE professor.ID=${id}`, (err, row, fields) => {
            if(!err) {
                res.send(JSON.stringify(row));
            }
            else {
                console.log(err);
            }
        });
    },

    addProfessor: (req, res, data) => {
        db.query(`
            INSERT INTO professor 
            (ID, Name, DID) 
            VALUES
                ("${data.ID}",
                "${data.Name}",
                "${data.DID}")
        `, (err, result) => {
            if(!err) {
                res.send('1 record inserted');
            }
            else {
                console.log(err);
            }
        });
    },

    deleteProfessor: (req, res, id) => {
        db.query(`DELETE FROM professor WHERE ID=${id}`, (err, result) => {
            if(!err) {
                res.send(`id ${id} record deleted`);
            }
            else {
                console.log(err);
            }
        })
    },

    updateProfessor: (req, res, id, data) => {
        db.query(`
            UPDATE professor 
            SET 
                ID = "${data.ID}",
                Name = "${data.Name}",
                DID = "${data.DID}" 
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