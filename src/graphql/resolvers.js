const { getProduct, getProducts, addProduct, updateProduct, deleteProduct} = require('./product.resolvers')

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        getPerson: (_, args) => `Hello my name is: ${args.name}, I'm year old is: ${args.age}`,
        getInt: () => 2,
        getFloat: () => 1.1,
        getString: () => 'Test type data',
        getBoolean: () => [true, false, true],
        getID: () => '123456',

        // products
        product: getProduct,
        products: getProducts
    },
    Mutation: {
        // products
        addProduct,
        updateProduct,
        deleteProduct,
    }
}

module.exports = resolvers;