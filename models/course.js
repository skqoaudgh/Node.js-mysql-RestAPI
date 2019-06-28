module.exports = (sequelize, DataTypes) => {
    return sequelize.define('course', {
        Name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        ProfessorID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: { 
                model: "professor", 
                key: "ID" 
            }
        }
    }, {
        timestamps: false,
    });
};