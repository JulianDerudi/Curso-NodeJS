import http from "http";

const server = http.createServer((req, res) => {
    //console.log(req);                            // nomas para mostrarlo
    res.statusCode = 200;                        // todo OK
    res.setHeader("Content-Type", "text/plain"); // "Cambia el tipo de contenido por texto plano"
    res.end("Hola desde HTTP");                  // Corta comunicacion
});

const PORT = 3000;

server.listen(PORT, () => console.log(`http://localhost:${PORT}`));