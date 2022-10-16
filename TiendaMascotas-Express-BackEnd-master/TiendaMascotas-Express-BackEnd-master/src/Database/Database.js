import Sequelize from "sequelize";

const sequelize = new Sequelize('mascotas', 'postgres', '0918', {
  host: 'localhost',
  dialect: 'postgres'
});

export {
  sequelize
}