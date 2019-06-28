const db = require('../config/database');

module.exports = {
    getProfessors: (req, res) => {
        db.query('SELECT * FROM professor', (err, rows, field) => {
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
        db.query(`SELECT * FROM professor WHERE ID=${id}`, (err, row, field) => {
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