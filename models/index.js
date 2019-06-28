const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Student = require('./student')(sequelize, Sequelize);
db.Professor = require('./professor.js')(sequelize, Sequelize);
db.Department = require('./department.js')(sequelize, Sequelize);
db.Course = require('./course.js')(sequelize, Sequelize);
db.Courselist = require('./courselist.js')(sequelize, Sequelize);

db.Professor.hasyMany(db.Student);
db.Professor.hasyMany(db.Course);
db.Department.hasyMany(db.Student);
db.Department.hasyMany(db.Professor);
db.Course.hasyMany(db.Courselist);
db.Student.hasyMany(db.Courselist);

module.exports = db;