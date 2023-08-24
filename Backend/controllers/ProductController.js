const productModel = require('../models/Product');

const getProducts = (req, res) =>  {
    productModel
        .getAllProducts()
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));
};

const getProduct = (req, res) => {
    const { id } = req.params

    productModel
        .getProduct(id)
        .then(results => res.status(201).json(results))
        .catch(error => res.status(500).json(error));

};

const insertProduct = (req, res) => {
    const { product_name, product_price,active } = req.body

    if(product_name !== '' && product_price !== ''){
        productModel
            .insertProduct({ product_name, product_price,active })
            .then(results => res.status(201).json({message: "Producto agregado exitosamente"}))
            .catch(error => res.status(500).json(error));
    }else {
        res.status(400).send({message: 'Producto inválido'})
    }
}

const updateProduct = (req, res) => {
    const { id } = req.params
    const { product_name, product_price,active } = req.body

    if(product_name !== '' && product_price !== ''){
        productModel
            .insertProduct({ product_name, product_price,active })
            .then(results => res.status(201).json({message: "Producto agregado exitosamente"}))
            .catch(error => res.status(500).json(error));
    }else {
        res.status(400).send({message: 'Producto inválido'})
    }
}

const deleteProduct = (req,res) => {
    const { id } = req.params

    productModel
        .deleteProduct(id)
        .then(results => res.status(201).json({
            message: 'Producto eliminado exitosamente'
        }))
        .catch(error => res.status(500).json(error));
}

const insertProducts = (req, res) =>  res.status(200).send({
    message:"Products"
});



module.exports = {
    getProducts,
    getProduct,
    insertProducts,
    insertProduct,
    updateProduct,
    deleteProduct
};