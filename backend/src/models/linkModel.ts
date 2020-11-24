import Sequelize, {Model, Optional} from 'sequelize';
import {Link} from './link';
import database from '../database';

//quando criar um novo link, o id é opcional
interface ILinkCreationAttributes extends Optional<Link, "id">{}

export interface ILinkModel extends Model<Link, ILinkCreationAttributes>, Link{}

//criação de uma tabela que segue as regras acima
const LinkModel = database.define<ILinkModel>('link', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    url: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    code: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false
    },
    hits: {
        type: Sequelize.INTEGER.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
})

export default LinkModel;