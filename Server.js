const express = require('express');
const mongpoose = require('mongoose');

require('dotenv').config();

const cors = require('cors');

const routes = require("./routes/ToDoRoutes");

const app = express();

const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

app.use(routes); 


mongpoose
    .connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Mongoose connected....'))
    .catch((err) => console.error(err));

app.listen(PORT, () =>{
    console.log('App listening on port!');
})