const db = require('../config/database');

module.exports = {
    getAllCourses: (req, res) => {
        db.query(`
            SELECT course.ID, course.Name, professor.Name AS Professor
            FROM course
            LEFT JOIN professor ON professor.ID=course.Professor`, (err, rows, field) => {
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

    getMyCourses: (req, res, id) => {
        db.query(`
            SELECT courselist.ID AS ListID, course.ID AS CourseID, course.Name
            FROM courselist, course
            WHERE courselist.SID=${id} AND courselist.CID=course.ID`, (err, rows, field) => {
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

    registCourse: (req, res, data) => {
        db.query(`INSERT INTO courselist (SID, CID) VALUES ("${data.sid}","${data.cid}")`, (err, result) => {
            if(!err) {
                res.send('1 record inserted');
            }
            else {
                console.log(err);
            }
        });
    },

    cancelCourse: (req, res, id) => {
        db.query(`DELETE FROM courselist WHERE ID=${id}`, (err, result) => {
            if(!err) {
                res.send(`id ${id} record deleted`);
            }
            else {
                console.log(err);
            }
        });
    }
}