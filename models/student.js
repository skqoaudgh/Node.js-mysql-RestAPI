module.exports = (sequelize, DataTypes) => {
    return sequelize.define('student', {
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
        Birth: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        Phonenumber: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        timestamps: false,
    });
};