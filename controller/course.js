const Models = require('../models/index');
const Course = Models.Course;
const Courselist = Models.Courselist;

module.exports = {
    getAllCourses: (req, res) => {
        Course.findAll({
            attributes: { 
                exclude: ['ProfessorID'] 
            },
            include: [{
                model: Models.Professor,
                as: 'Professor',
                where: { ID: Models.Sequelize.col('Course.ProfessorID') },
                attributes: { exclude: ['ID', 'DepartmentID'] }
            }]
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);
        });
    },

    getMyCourses: (req, res, id) => {
        Courselist.findAll({
            attributes: { 
                exclude: ['StudentID'] 
            },
            include: [{
                model: Models.Student,
                as: 'Student',
                where: { ID: Models.Sequelize.col('Courselist.StudentID') },
                attributes: { exclude: ['ID', 'Birth', 'Phonenumber', 'Email', 'AdvisorID', 'DepartmentID'] }
            }, {
                model: Models.Course,
                as: 'Course',
                where: { ID: Models.Sequelize.col('Courselist.CourseID') },
                include: [{
                    model: Models.Professor,
                    as: 'Professor',
                    where: { ID: Models.Sequelize.col('Course.ProfessorID') },
                    attributes: { exclude: ['ID', 'DepartmentID'] }
                }],
                attributes: { exclude: ['ProfessorID'] }
            }]
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);
        });
    },

    registCourse: (req, res, data) => {
        Courselist.create({
            StudentID: data.StudentID,
            CourseID: data.CourseID
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);          
        });
    },

    cancelCourse: (req, res, id) => {
        Courselist.destroy({
            where: {
                ID: id
            }
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);          
        });
    }
}