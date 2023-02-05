const mongoose = require('mongoose');
const Detail = require ("../models/Detail");
const slider = require("../models/slider");
mongoose.set('strictQuery', true);

mongoose.connect('mongodb+srv://anil:anil1921@cluster0.634sltj.mongodb.net/sunil?retryWrites=true&w=majority')
// mongoose.connect('mongodb://127.0.0.1:27017/webiste')
.then(()=>{
    console.log(`MongoDB is Connected !`);
// for navbar
    // Detail.create({
    //     brandName : "suniel Sharma",
    //     brandIconUrl : "code.jpg",
    //     links : [
    //         {
    //             label: "Home",
    //             url : "/"
    //         }, 
    //         {
    //             label : 'About',
    //             url : "/about",
    //         },
    //         {
    //             label: "Contact",
    //             url : '/contact',
    //         },
    //         {
    //             label : "Services",
    //             url : '/services',
    //         },
    //     ],
    // })

    //for slider

    // slider.create([
    //     {
    //         title : 'Learn JavaScript ',
    //         subTitle : 'JavaScript is the most popular progarmming language in the whole world !',
    //         imgUrl : '/images/s1.jpg',
    //     },

    //     {
    //         title : 'Learn Java ',
    //         subTitle : 'Java is the most popular progarmming language in the whole world !',
    //         imgUrl : '/images/s2.jpg',
    //     },
        
    //     {
    //         title : 'Learn c++ ',
    //         subTitle : 'C++ is the most popular progarmming language in the whole world !',
    //         imgUrl : '/images/s3.jpg',
    //     },
        
    // ])


}).catch((error)=>{
    console.log(`MongoDB is not Connected ! ${error}`);
})



