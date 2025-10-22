import Sequelize from 'sequelize'
import sequelize from './db.js'

const Usuario = sequelize.define("usuarios", {
    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER
    }
});

Usuario.sync({force: false});