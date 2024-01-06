const {Sequelize} = require ('sequelize');
require("dotenv").config()
const sequelize = new Sequelize (
    process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,{
        dialect: 'mysql',
        host: process.env.DB_HOST
    }
);

(async () => {
    try {
        await sequelize.authenticate()
        console.log('success')
    } catch (error) {
        console.log('error')
    }
})();

module.exports = sequelize;