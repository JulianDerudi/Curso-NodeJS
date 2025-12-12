import express from 'express';
import productsRouter from './src/routes/products.router.js';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola desde Express - GET');
});

app.use('/api/products', productsRouter);



app.listen(PORT, () => { 
    console.log(`http://localhost:${PORT}`);
});