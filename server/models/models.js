const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Dish = sequelize.define('dish', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
    info_head: {type: DataTypes.STRING, allowNull: false},
    mini_info_head: {type: DataTypes.STRING, allowNull: false},
    text_info: {type: DataTypes.TEXT, allowNull: false},
})

const Pay = sequelize.define('Pay', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    phone: {type: DataTypes.STRING, allowNull: false},
    personal_account: {type: DataTypes.INTEGER, allowNull: false},
    price: {type: DataTypes.INTEGER, allowNull: false}
})

Dish.hasMany(Pay)
Pay.belongsTo(Dish)

User.hasMany(Pay)
Pay.belongsTo(User)

module.exports = {
    User, Pay, Dish,
}





