const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());

//Rota -> registro e login routes
app.use('/auth', require('./routes/jwtAuth'));

//Rota -> dashboard
app.use('/dashboard', require('./routes/dashboard'));

app.listen(5000, () => {
    console.log('Escutando porta 5000');
});