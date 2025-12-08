import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hola desde Express - GET');
});

app.post('/', (req, res) => {
    res.send('Hola desde Express - POST');
});


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});