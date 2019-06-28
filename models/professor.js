module.exports = (sequelize, DataTypes) => {
    return sequelize.define('professor', {
        ID: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        DepartmentID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: { 
                model: "department", 
                key: "ID" 
            }
        }
    }, {
        timestamps: false,
    });
};