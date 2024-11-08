const express = require('express');
const morgan = require('morgan');
const cors = require("cors");

const config = require('./config');
const { errors, response } = require('./middlewares/error');

const convertRouter = require('./routes/convertRouter');

const app = express();

// Open requests from frontend
app.use(cors({
    origin: "http://localhost:5173" //frontend en Vite
}));

//config
app.set('port', config.app.port);

//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.use('/converter', convertRouter);

//middlware errors
app.use(errors);
app.use(response);

module.exports = app;
