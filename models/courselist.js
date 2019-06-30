module.exports = (sequelize, DataTypes) => {
    return sequelize.define('courselist', {
        ID: {
            type: DataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            unique: true,
            primaryKey: true
        }
    }, {
        timestamps: false,
    });
};