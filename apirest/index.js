import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola desde Express - GET');
});

const products = [
    { id: 1, name: 'Producto A', price: 100 },
    { id: 2, name: 'Producto B', price: 200 },
    { id: 3, name: 'Producto C', price: 300 },
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});