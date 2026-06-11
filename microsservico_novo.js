const express = require('express');

const app = express();
const PORT = 5000;

// Permite receber JSON
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.send('Servidor Express funcionando!');
});

// Exemplo de rota GET
app.get('/usuarios', (req, res) => {
    res.json([
        { id: 1, nome: 'Ana' }
    ]);
});

// Exemplo de rota POST
app.post('/usuarios', (req, res) => {
    const usuario = req.body;

    res.status(201).json({
        mensagem: 'Usuário criado com sucesso',
        usuario: usuario
    });
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});