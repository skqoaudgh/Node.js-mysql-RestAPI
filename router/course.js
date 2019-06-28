const express = require('express');
const coursectrl = require('../controller/course');

const router = express.Router();

router.get('/', (req, res, next) => {
    coursectrl.getAllCourses(req, res);
});

router.get('/:id', (req, res, next) => {
    coursectrl.getMyCourses(req, res, req.params.id);
});

router.post('/', (req, res, next) => {
    coursectrl.registCourse(req, res, req.body);
});

router.delete('/:id', (req, res, next) => {
    coursectrl.cancelCourse(req, res, req.params.id);
});

module.exports = router;