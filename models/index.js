const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Department = require('./department.js')(sequelize, Sequelize);
db.Professor = require('./professor.js')(sequelize, Sequelize);
db.Student = require('./student')(sequelize, Sequelize);
db.Course = require('./course.js')(sequelize, Sequelize);
db.Courselist = require('./courselist.js')(sequelize, Sequelize);

db.Student.belongsTo(db.Department, {as: 'Department', foreignKey: { allowNull: false }});
db.Student.belongsTo(db.Professor, {as: 'Advisor', foreignKey: { allowNull: false }});
db.Professor.belongsTo(db.Department, {as: 'Department', foreignKey: { allowNull: false }});
db.Course.belongsTo(db.Professor, {as: 'Professor', foreignKey: { allowNull: false }});
db.Courselist.belongsTo(db.Student, {as: 'Student', foreignKey: { allowNull: false }});
db.Courselist.belongsTo(db.Course, {as: 'Course', foreignKey: { allowNull: false }});

module.exports = db;