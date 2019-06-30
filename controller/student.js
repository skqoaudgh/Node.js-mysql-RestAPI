const Models = require('../models/index');
const Student = Models.Student;

module.exports = {
    getStudents: async (req, res) => {
        Student.findAll({
            attributes: { 
                exclude: ['AdvisorID', 'DepartmentID'] 
            },
            include: [{
                model: Models.Department,
                as: 'Department',
                where: { ID: Models.Sequelize.col('Student.DepartmentID') },
                attributes: { exclude: ['ID'] }
            },
            {
                model: Models.Professor,
                as: 'Advisor',
                where: { ID: Models.Sequelize.col('Student.AdvisorID') },
                attributes: { exclude: ['ID', 'DepartmentID'] }
            }]
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);
        });
    },

    getStudent: (req, res, id) => {
        Student.findOne({
            attributes: { 
                exclude: ['AdvisorID', 'DepartmentID'] 
            },
            include: [{
                model: Models.Department,
                as: 'Department',
                where: { ID: Models.Sequelize.col('Student.DepartmentID') },
                attributes: { exclude: ['ID'] }
            },
            {
                model: Models.Professor,
                as: 'Advisor',
                where: { ID: Models.Sequelize.col('Student.AdvisorID') },
                attributes: { exclude: ['ID', 'DepartmentID'] }
            }],
            where: { ID: id }
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);
        });
    },

    addStudent: (req, res, data) => {
        Student.create({
            ID: data.ID,
            Name: data.Name,
            Birth: data.Birth,
            Phonenumber: data.Phonenumber,
            Email: data.Email,
            DepartmentID: data.DepartmentID,
            AdvisorID: data.AdvisorID
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);          
        });
    },

    deleteStudent: (req, res, id) => {
        Student.destroy({
            where: {
                ID: id
            }
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);          
        });
    },

    updateStudent: (req, res, id, data) => {
        Student.update({
            ID: data.ID,
            Name: data.Name,
            Birth: data.Birth,
            Phonenumber: data.Phonenumber,
            Email: data.Email,
            DepartmentID: data.DepartmentID,
            AdvisorID: data.AdvisorID         
        },{
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