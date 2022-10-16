import { Animal } from '../Models/tipoAnimal.js';

const getAnimals = async (req, res) => {

    try {
        const animales = await Animal.findAll({
            order: [
                ['id', 'ASC']
            ]
        })
        res.status(200).json(animales);
        // res.send('getAnimals de Animales')

    } catch (error) {
        res.status(400).json({ mensaje: `${error}` })
    }

}

const getAnimal = async (req, res) => {

    try {
        const { id } = req.params
        const animal = await Animal.findOne({
            where: {
                id
            }
        })

        if (!animal) {
            return res.status(404).json({ mensaje: 'No Existe ' });
        }

        res.status(200).json(animal);
        // res.send('getAnimals de Animales')


    } catch (error) {
        res.status(400).json({ mensaje: `${error}` })
    }

}




const postAnimal = async (req, res) => {

    try {
        const { tipo_animal, descripcion } = req.body

        const newAnimal = await Animal.create({
            tipo_animal,
            descripcion
        })

        console.log(newAnimal)

        //res.send('postAnimal de Animales')
    } catch (error) {
        res.status(400).json({ mensaje: `${error}` })
    }


}

const putAnimal = async (req, res) => {

    try {
        const { id } = req.params;
        const { tipo_animal, descripcion } = req.body;
        const oldAnimal = await Animal.findByPk(id);
        oldAnimal.tipo_animal = tipo_animal;
        oldAnimal.descripcion = descripcion;
        const modMascota = await oldAnimal.save()
        res.status(200).json(modMascota)

    } catch (error) {
        res.status(400).json({ mensaje: `${error}` })

    }

}

const deleteAnimal = async (req, res) => {
    try {
        const { id } = req.params;
        const respueta = await Animal.destroy({
            where: {
                id
            }
        })
        res.status(200).json({
            body: {
                id,
                mensaje: "success"
            }
        });

    } catch (error) {
        res.status(500).json({ mensaje: `${error}` });

    }
}


export {
    getAnimals,
    getAnimal,
    postAnimal,
    putAnimal,
    deleteAnimal
}

// ### proyecto realizado por: *Miguel Andres Pasaje*
