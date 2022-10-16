import { Mascota } from '../Models/Mascota.js';

const getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.findAll({
      order: [
        ['id', 'ASC']
      ]
    });
    res.status(200).json(mascotas);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}
const getMascotass = async (req, res) => {
  try {
    const mascotas = await Mascota.findAll({
      order: [
        ['idTipoAnimal', 'ASC']
      ]
    });
    res.status(200).json(mascotas);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}

const getMascota = async (req, res) => {
  try {

    const { id } = req.params

    const mascota = await Mascota.findOne({
      where: {
        id
      }
    })

    if (!mascota) {
      return res.status(404).json({ mensaje: 'Mascota No Existe ' });
    }

    res.status(200).json(mascota);
    // 


  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}



const postMascotas = async (req, res) => {
  try {
    const { nombre, descripcion, imagen, estado_adopcion, idTipoAnimal, raza } = req.body;

    const newMascota = await Mascota.create({
      nombre,
      descripcion,
      imagen,
      estado_adopcion,
      idTipoAnimal,
      raza
    });

    res.status(200).json(newMascota);
  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}

const putMascotas = async (req, res) => {
  try {

    const { id } = req.params;
    const { nombre, descripcion, imagen, estado_adopcion, idTipoAnimal } = req.body;
    const oldMascota = await Mascota.findByPk(id);
    oldMascota.nombre = nombre;
    oldMascota.descripcion = descripcion;
    oldMascota.imagen = imagen
    oldMascota.estado_adopcion = estado_adopcion;
    oldMascota.idTipoAnimal = idTipoAnimal;

    const modMascota = await oldMascota.save();

    res.status(200).json(modMascota);

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }
}

const deleteMascotas = async (req, res) => {
  try {

    const { id } = req.params;

    const respueta = await Mascota.destroy({
      where: {
        id
      }
    });

    res.status(200).json({
      body: {
        id,
        status: "success"
      }
    });

  } catch (error) {
    res.status(400).json({ mensaje: `${error}` });
  }

}


export {
  getMascotas,
  getMascota,
  postMascotas,
  putMascotas,
  deleteMascotas,
  getMascotass
}

// ### proyecto realizado por: *Miguel Andres Pasaje*
