const products = [
    { id: 1, name: 'Producto A', price: 100 }, 
    { id: 2, name: 'Producto B', price: 200 },
    { id: 3, name: 'Producto C', price: 300 },
];

const getProducts = () => products;

const getProductById = (id) => {
    return products.find(p => p.id === parseInt(id));
};

const createProduct = (name) => {
    const newProduct = {
        id: products.length + 1,
        name,
        price: 0
    };
    products.push(newProduct);
    return newProduct;
};

export default {
    getProducts,
    getProductById,
    createProduct
};