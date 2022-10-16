import { DataTypes } from 'sequelize';
import { sequelize } from '../Database/Database.js';
import { Mascota } from './Mascota.js'

const Animal = sequelize.define('tipo_animal', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    tipo_animal: {
        type: DataTypes.STRING,
    },
    descripcion: {
        type: DataTypes.STRING
    }

})

Animal.hasMany(Mascota, {
    foreignKey: 'idTipoAnimal',
    sourceKey: 'id'
})
Mascota.belongsTo(Animal, {
    foreignKey: 'idTipoAnimal',
    targetId: 'id'
})

export {
    Animal
}