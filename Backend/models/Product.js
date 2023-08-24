const connection = require("../knexfile")['development'];
const database = require('knex')(connection);

const getAllProducts = () => {
    // consultado a todos los elementos dentro del la tabla products
    // select * from products
    return database('products');
};

const getProduct = (idProduct) => {
    // select * from products where id = idProduct
    return database('products')
        .where( { id: idProduct})
        .first();
};

const insertProduct= (product) => {
    // insert into products (product_name,...) values('Aguacate',...)
    return database('products')
        .insert(product);
};

const updateProduct= (idProduct, product) => {
    return database('products')
        .where('id','=',idProduct)
        .update(product)
}

const deleteProduct= (idProduct) => {
    return database('products')
        .where('id','=',idProduct)
        .del()
}

module.exports = {
    getAllProducts,
    getProduct,
    insertProduct,
    updateProduct,
    deleteProduct
}