import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Producto solicitado con ID: ${id}`);
});


// agregar al proyecto un middleware para manejar rutas no definidas
app.use((req, res, next) => {
  res.status(404).send('Error 404: Recurso no encontrado o ruta inválida');
});