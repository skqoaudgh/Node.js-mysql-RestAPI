module.exports = (sequelize, DataTypes) => {
    return sequelize.define('courselist', {
        ID: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        CourseID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: { 
                model: "course", 
                key: "ID" 
            }
        },
        StudentID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: { 
                model: "student", 
                key: "ID" 
            }
        }
    }, {
        timestamps: false,
    });
};