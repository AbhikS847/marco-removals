const express = require('express');
const Booking = require('../model/bookingModel');
const router = express.Router();
const sendMail = require('../api/sendgrid/sendEmail');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads');
    },
    filename: (req, file, cb) => {
        cb(null, path.extname(file.originalname) + '_' + Date.now());
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)){
        cb(null, true);
    }
    else {
        cb(null, false);
    }
}

const upload = multer({storage: storage, fileFilter});

router.post('/create', upload.any('photos'), async(req,res) => {
    const {_id, name, number, email, location, date, time, desc, price} = req.body;

    const images = req.files;

    console.log(images);

    if(!name || !number || !email || !location || !date || !time || !price){
        res.status(400);
        throw new Error('Please include all fields');
    }

    const booking = await Booking.create({
        _id,
        name,
        number,
        email,
        location,
        date,
        time,
        desc,
        price,
        images
    });

    booking.save();

    res.send(req.body);

    sendMail(booking);
});

router.get('/', async(req,res) => {

    const bookings = await Booking.find();

    res.send(bookings);
    
})

module.exports = router;