module.exports = (sequelize, DataTypes) => {
    return sequelize.define('course', {
        ID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        ProfessorID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: { 
                model: "professors", 
                key: "ID" 
            }
        }
    }, {
        timestamps: false,
    });
};