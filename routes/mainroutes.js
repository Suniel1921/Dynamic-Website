// const express = require('express'); // yato yeh dono line likh lo  (1 and 2 line)
const routes = require('express').Router() //yato yeh single line likhlo
// const routes = express.Router();

const Detail = require('../models/Detail');
const slider = require('../models/slider');

routes.get('/', async (req, res) => {
    const details = await Detail.findOne({ "_id": '63de4e9003c66f9e141b68ff' }) //if you use mongodb then change the id 
    //  console.log(details)
    const slide = await slider.find()
    // console.log(slide) // to show your data in vs terminal
    
    res.render('index', {
        details: details,
        slide:slide
    });
})

routes.get('/about', async (req, res) => {
    const details = await Detail.findOne({ "_id:": "63de4e9003c66f9e141b68ff" })
    res.render('about', {
        details: details
    });
})

routes.get('/contact', async (req, res) => {
    const details = await Detail.findOne({ "_id:": "63de4e9003c66f9e141b68ff" })
    res.render('contact', {
        details: details
    });
})

routes.get('/services', async (req, res) => {
    const details = await Detail.findOne({ "_id:": "63de4e9003c66f9e141b68ff" })
    res.render('services', {
        details: details
    })
})

module.exports = routes
