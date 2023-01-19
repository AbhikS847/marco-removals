const express = require('express');
const Booking = require('../model/bookingModel');
const router = express.Router();
const sendMail = require('../api/sendgrid/sendEmail');

router.post('/create', async(req,res) => {
    const {_id, name, number, email, location, date, time, desc} = req.body;

    if(!name || !number || !email || !location || !date || !time){
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
        desc
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