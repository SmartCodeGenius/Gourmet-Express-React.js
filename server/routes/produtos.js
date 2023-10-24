const router = require('express').Router();
const pool = require('../db');
const authorization = require('../middleware/authorization');

router.get('/', authorization, async(req, res) => {
    try {
        let query = "SELECT * FROM estabelecimentos WHERE id_estabelecimento = $1";
        const estabelecimentos = await pool.query(query, [req.usuario]);

        res.json(estabelecimentos.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Erro do servidor')
    }
});

module.exports = router;