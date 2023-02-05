const { prototype } = require('events');
const express = require ('express');
const { route } = require('../routes/mainroutes');
const app = express();

const routes = require('../routes/mainroutes');
const database = require('../database/conn');
const Detail = require ("../models/Detail")
const slider = require('../models/slider');
const hbs = require('hbs');

//middleware
app.use('', routes);

const path = require('path');

//setting path 
const routesPath = path.join(__dirname, '../routes');
const publicPath = path.join(__dirname, '../public');
const partialsPath = path.join(__dirname, '../partials');

//middleware
app.use(express.static(routesPath));
app.use(express.static(publicPath));
app.use(express.static(partialsPath))

//template engine 
// app.set('view engine', 'ejs');
app.set('view engine', 'hbs');
app.set('views', 'views')
hbs.registerPartials("views/partials");




const PORT = process.env.PORT || 8000;



app.listen(PORT, (req, res)=>{
    console.log(`Server is running on port NO : ${PORT}`);
})