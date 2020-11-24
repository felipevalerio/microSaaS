import {Sequelize} from 'sequelize';

//const sequelize = new Sequelize('mysql://root:null@localhost:3306/banco_teste');

const sequelize = new Sequelize('banco_teste', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

export default sequelize;