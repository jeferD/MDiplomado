import { Router } from 'express';
import { getMascotas, getMascota, getMascotass, postMascotas, putMascotas, deleteMascotas } from '../controllers/ControllerMascota.js';
import { getAnimals, getAnimal, postAnimal, putAnimal, deleteAnimal } from '../controllers/ControllerTipoAnimal.js';

import { getAdopciones, getAdopcion, postAdopcion, putAdopcion, deleteAdopcion } from '../controllers/ControllerAdopcion.js'




const router = Router();

router.get('/', (req, res) => {
  res.send("Hola estamos en Index");
});

router.get('/mascotas', getMascotas);
router.get('/mascota/:id', getMascota);
router.get('/mascotass/:id', getMascotass);
router.post('/mascotas', postMascotas);
router.put('/mascotas/:id', putMascotas);
router.delete('/mascotas/:id', deleteMascotas);


router.get('/Animals', getAnimals);
router.get('/Animal/:id', getAnimal);
router.post('/Animal', postAnimal);
router.put('/Animal/:id', putAnimal);
router.delete('/Animal/:id', deleteAnimal);

router.get('/Adopciones', getAdopciones);
router.get('/Adopcion/:id', getAdopcion);
router.post('/Adopcion/:idMascota', postAdopcion);
router.put('/Adopcion/:id', putAdopcion);
router.delete('/Adopcion/:id', deleteAdopcion);


export default router;