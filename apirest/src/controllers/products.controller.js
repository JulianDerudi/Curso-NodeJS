import productService from '../services/products.service.js';


export const getProducts = (req, res) => {
    res.json(getProducts());
};

export const getProductById = (req, res) => {
    const { id } = req.params;
    const product = productService.getProductById(id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
};


export const createProduct = (req, res) => {
    if (typeof req.body.name !== 'string') {
        res.status(400).json({ message: 'El nombre del producto debe ser una cadena de texto' });
        return;
    }

    const { name } = req.body;
    const product = productService.createProduct(name);
    res.status(201).json(product);
}