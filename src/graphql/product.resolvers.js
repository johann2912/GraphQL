const ProductService = require('./../services/product.service');
const service = new ProductService();

const getProduct = async (_, { id }) => {
    const product = await service.findOne(id);
    return product;
};

const getProducts = async () => {
    const products = await service.find({});
    return products;
};

const addProduct = async (_, { input }) => {
    const newProduct = await service.create(input);
    return newProduct;
}


module.exports = {
    getProduct,
    getProducts,
    addProduct,
};