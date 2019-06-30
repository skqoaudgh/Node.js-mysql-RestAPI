const Models = require('../models/index');
const Professor = Models.Professor;

module.exports = {
    getProfessors: (req, res) => {
        Professor.findAll({
            attributes: { 
                exclude: ['AdvisorID'] 
            },
            include: [{
                model: Models.Department,
                as: 'Department',
                where: { ID: Models.Sequelize.col('Professor.DepartmentID') },
                attributes: { exclude: ['ID'] }
            }]
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);
        });
    },

    getProfessor: (req, res, id) => {
        Professor.findOne({
            attributes: { 
                exclude: ['AdvisorID'] 
            },
            include: [{
                model: Models.Department,
                as: 'Department',
                where: { ID: Models.Sequelize.col('Professor.DepartmentID') },
                attributes: { exclude: ['ID'] }
            }],
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

    addProfessor: (req, res, data) => {
        Professor.create({
            ID: data.ID,
            Name: data.Name,
            DepartmentID: data.DepartmentID
        }).then(result => {
            res.json(result);
        }).catch(error => {
            res.status(500).json({ error: error.toString() });
            console.log(error);          
        });
    },

    deleteProfessor: (req, res, id) => {
        Professor.destroy({
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

    updateProfessor: (req, res, id, data) => {
        Professor.update({
            ID: data.ID,
            Name: data.Name,
            DepartmentID: data.DepartmentID
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