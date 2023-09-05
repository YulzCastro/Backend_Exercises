const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController')

//Obtener todas las tareas
router.get('/', TaskController.getAllTasks)

//Agregar nueva tarea
router.post('/', TaskController.insertTask)

//Actualizar la tarea
router.put('/:id', TaskController.updateTask)

//Eliminar una tarea
router.delete('/:id', TaskController.removeTask)

//Obtener una tarea
router.get('/:id', TaskController.getOneTask)


module.exports = router