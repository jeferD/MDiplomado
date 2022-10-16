import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/Database.js';
import { Mascota } from './Mascota.js'


const Adopcion = sequelize.define('Adopcion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    correo: {
        type: DataTypes.STRING
    },
    telefono: {
        type: DataTypes.STRING
    },

});

/* Adopcion.hasMany(Mascota, {
    foreignKey: 'idAdopcion',
    sourceKey: 'id'
})
Mascota.belongsTo(Adopcion, {
    foreignKey: 'idAdopcion',
    targetId: 'id'
}) */


export {
    Adopcion
}