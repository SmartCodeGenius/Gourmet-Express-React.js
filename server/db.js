const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'ChiMa1312#$_',
    host: 'localhost',
    port: 5432,
    database: 'gourmetexpress'
});

module.exports = pool;