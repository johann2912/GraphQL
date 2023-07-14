const { getProduct, getProducts, addProduct, updateProduct, deleteProduct, getProductsByCategory} = require('./product.resolvers');
const { login } = require('./auth.resolvers');
const { addCategory, getCategory} = require('./category.resolvers');
const { RegularExpression } = require('graphql-scalars');

const CategoryNameType = new RegularExpression('CategoryNameType', /^[a-zA-Z0-9]{3,8}$/);

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
        products: getProducts,

        // categories
        category: getCategory,
    },
    Mutation: {
        // auth
        login,

        // products
        addProduct,
        updateProduct,
        deleteProduct,

        // categories
        addCategory,
    },
    CategoryNameType,
    Category: {
        products: getProductsByCategory
    }
}

module.exports = resolvers;