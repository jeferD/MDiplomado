# proyecto Mascotas

- #### esta desarrollado con el framework de Express(NodeJS) y el orm de base de datos sequelize.

## este proyecto esta orientado para una tienda de Mascotas

- esta es la versión 1.2 de la api
- - para esta versión 1.2 esta funcional _'CRUD'_ de Mascota , Animal, solicitudAdopcion

### para iniciarlo.

- descargue el proyecyo e ingrese los siguientes comandos para correrlo
- - _instale nodeJS_
- - _debe crear la base de datos mascotas_
- - _"npm init -y "en la carpeta del proyecto_
- - _npm i sequelize_
- - _npm start_

_para hacer preubas puede insertar estos datos en la BD despues de ejecutar el proyecto_

INSERT INTO public.tipo_animals
(id, tipo_animal, descripcion, "createdAt", "updatedAt")
VALUES(1, 'gato', 'gatito desc', '2022-10-08 13:49:36.187', '2022-10-08 13:49:36.187');
INSERT INTO public.tipo_animals
(id, tipo_animal, descripcion, "createdAt", "updatedAt")
VALUES(2, 'perro', 'perrito desc', '2022-10-08 13:51:19.831', '2022-10-08 13:51:19.831');
INSERT INTO public.tipo_animals
(id, tipo_animal, descripcion, "createdAt", "updatedAt")
VALUES(3, 'loro', 'loro desc', '2022-10-08 13:54:50.469', '2022-10-08 13:54:50.469');

INSERT INTO public.mascotas
(id, nombre, descripcion,imagen, estado_adopcion, "createdAt", "updatedAt", "idTipoAnimal")
VALUES(2, 'lazi', 'gato desc','https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudio-blanco_155003-13189.jpg?w=2000', false, '2022-10-08 14:02:28.956', '2022-10-08 14:02:28.956', 1);
INSERT INTO public.mascotas
(id, nombre, descripcion,imagen, estado_adopcion, "createdAt", "updatedAt", "idTipoAnimal")
VALUES(1, 'firu', 'perro desc','https://img.freepik.com/foto-gratis/gato-rojo-o-blanco-i-estudio-blanco_155003-13189.jpg?w=2000', false, '2022-10-08 14:01:16.795', '2022-10-08 14:01:16.795', 2);

INSERT INTO public."Adopcions"
(id, nombre, correo, telefono, "createdAt", "updatedAt", "idMascota")
VALUES(6, 'adoptante1', 'adoptante1@correo.email', '123456789', '2022-10-08 14:33:48.175', '2022-10-08 14:33:48.175', 1);
INSERT INTO public."Adopcions"
(id, nombre, correo, telefono, "createdAt", "updatedAt", "idMascota")
VALUES(7, 'adoptante1', 'adoptante1@correo.email', '123456789', '2022-10-08 14:34:34.685', '2022-10-08 14:34:34.685', 2);
INSERT INTO public."Adopcions"
(id, nombre, correo, telefono, "createdAt", "updatedAt", "idMascota")
VALUES(9, 'adoptante2', 'adoptante2@correo.email', '123456789', '2022-10-08 14:35:09.700', '2022-10-08 14:35:09.700', 1);
INSERT INTO public."Adopcions"
(id, nombre, correo, telefono, "createdAt", "updatedAt", "idMascota")
VALUES(10, 'adoptante2', 'adoptante2@correo.email', '123456789', '2022-10-08 14:35:22.522', '2022-10-08 14:35:22.522', 2);
INSERT INTO public."Adopcions"
(id, nombre, correo, telefono, "createdAt", "updatedAt", "idMascota")
VALUES(11, 'adoptante3', 'adoptante3@correo.email', '123456789', '2022-10-08 14:36:17.045', '2022-10-08 14:36:17.045', 2);

### proyecto realizado por: _Miguel Andres Pasaje_
