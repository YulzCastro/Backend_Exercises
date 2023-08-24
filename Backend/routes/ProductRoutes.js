const express = require('express');
const router = express.Router();
//const ProductController = require('./../controllers/ProductController');
const { ProductController } = require('./../controllers/');
//desestructuracion

//obtenemos todos los productos
router.get('/', ProductController.getProducts);

//insertamos un solo producto
router.post('/', ProductController.insertProduct);

// Actualizamos un producto
router.put('/:id', ProductController.updateProduct)

// Parámetros son los que encontramos en la ruta
// http://localhost:3000/api/v1/products/2

// Body es el cuerpo de la petición y no aparece en la ruta

// Los queries aparecen y se agregan empezando con ?,
// separados por &
// http://localhost:3000/api/v1/products/?product_name=Aguacate

// Eliminar un producto
router.delete('/:id',ProductController.deleteProduct)

// Obtener un solo producto
router.get('/:id',ProductController.getProduct)


module.exports = router;
