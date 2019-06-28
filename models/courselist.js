module.exports = (sequelize, DataTypes) => {
    return sequelize.define('courselist', {
        ID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        CourseID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: { 
                model: "courses", 
                key: "ID" 
            }
        },
        StudentID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: { 
                model: "students", 
                key: "ID" 
            }
        }
    }, {
        timestamps: false,
    });
};