const ProductService = require('./../services/product.service');
const service = new ProductService();

const getProduct = (_, { id }) => {
    return service.findOne(id);
};

const getProducts = () => {
    return service.find({});
};

const addProduct = (_, { input }) => {
    return service.create(input);
}

const updateProduct = (_, { id, input }) => {
    return service.update(id, input);
}

const deleteProduct = (_, { id }) => {
    service.delete(id)
    return id
}

const getProductsByCategory = (parent) => {
    const id = parent.dataValues.id;
    return service.getByCategory(id)
}

module.exports = {
    getProduct,
    getProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductsByCategory,
};