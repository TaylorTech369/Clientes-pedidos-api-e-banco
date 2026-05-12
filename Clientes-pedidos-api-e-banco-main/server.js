import express from 'express';
import pool from './db.js';
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors())

// =======================================
// ROTA PARA TABELA DE CLIENTES
// =======================================
app.get('/clientes', async (req, res) => {
    try {
        // Executamos a query SQL
        const clientes = await pool.query('SELECT * FROM clientes');
        return res.json(clientes.rows);
    } catch (err) {
        return res.status(500).json({ erro: "Erro na busca de clientes" });
    }
});

// =======================================
// ROTA PARA TABELA DE PEDIDOS
// =======================================

app.get('/pedidos', async (req, res) => {

    try {
        // Executamos a query SQL
        const pedidos = await pool.query('SELECT * FROM pedidos');
        return res.json(pedidos.rows);
    } catch (err) {
        return res.status(500).json({ erro: "Erro na busca de pedido" });
    }
});

// =======================================
// ROTA DE CADASTRO DE CLIENTES
// =======================================
app.post('/clientes', async (req, res) => {
    const { nome, email } = req.body;
    try {
        const novoCliente = await pool.query(
            'INSERT INTO clientes (nome, email) VALUES ($1, $2) RETURNING *',
            [nome, email]
        );
        return res.status(201).json(novoCliente.rows[0]);
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao cadastrar novo cliente" });
    }
});






// =======================================
// ROTA DE ATUALIZAÇÃO DE CLIENTE
// =======================================

app.put('/clientes/:id', async (req, res) => {

    const { id } = req.params 
    const { nome, email } = req.body;

    try {
        const atualizar = await pool.query('UPDATE clientes SET nome = $1, email = $2 WHERE id = $3 RETURNING *', [nome, email, id])
        res.json(atualizar.rows[0])
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao atualizar cliente" });
}})

// =======================================
// ROTA DE EXCLUSÃO DE CLIENTE E PEDIDOS VINCULADOS
// =======================================
app.delete('/clientes/:id', async (req, res) => {

    const { id } = req.params

    try {
        await pool.query('DELETE FROM clientes WHERE id = $1', [id])
        res.json({ mensage: "Cliente quitado gg" })
    } catch (err) {
        return res.status(500).json({ erro: "Erro ao excluir cliente" });
    }
    })







app.listen(3000, () => console.log("Servidor rodando na porta 3000, http://localhost:3000/clientes"));
