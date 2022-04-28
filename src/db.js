const Sequelize = require('sequelize')
const sequelize = new Sequelize('testecrud', 'root', '',{
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;