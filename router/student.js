const express = require('express');
const studentctrl = require('../controller/student');

const router = express.Router();

router.get('/', async (req, res, next) => {
    studentctrl.getStudents(req, res, next);
});

router.get('/:id', async (req, res, next) => {
    studentctrl.getStudent(req, res, req.params.id);
});

router.post('/', (req, res, next) => {
    studentctrl.addStudent(req, res, req.body);
});

router.delete('/:id', (req, res, next) => {
    studentctrl.deleteStudent(req, res, req.params.id);
});

router.put('/:id', (req, res, next) => {
    studentctrl.updateStudent(req, res, req.params.id, req.body);
});


module.exports = router;