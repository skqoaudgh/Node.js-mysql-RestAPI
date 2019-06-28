module.exports = (sequelize, DataTypes) => {
    return sequelize.define('department', {
        ID: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
            unique: true,
            primaryKey: true
        },
        Name: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
};