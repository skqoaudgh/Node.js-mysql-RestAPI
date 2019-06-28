const express = require('express');
const professorctrl = require('../controller/professor');

const router = express.Router();

router.get('/', (req, res, next) => {
    professorctrl.getProfessors(req, res);
});

router.get('/:id', (req, res, next) => {
    professorctrl.getProfessor(req, res, req.params.id);
});

router.post('/', (req, res, next) => {
    professorctrl.addProfessor(req, res, req.body);
});

router.delete('/:id', (req, res, next) => {
    professorctrl.deleteProfessor(req, res, req.params.id);
});

router.put('/:id', (req, res, next) => {
    professorctrl.updateProfessor(req, res, req.params.id, req.body);
});

module.exports = router;