import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/Database.js';
import { Adopcion } from './Adopcion.js';

const Mascota = sequelize.define('mascotas', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  imagen: {
    type: DataTypes.STRING
  },
  estado_adopcion: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
});

Mascota.hasMany(Adopcion, {
  foreignKey: 'idMascota',
  sourceKey: 'id'
})
Adopcion.belongsTo(Mascota, {
  foreignKey: 'idMascota',
  targetId: 'id'
})

export {
  Mascota
}