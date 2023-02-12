const express = require('express');

const Quote = require('../model/quoteModel');
const router = express.Router();
const sendQuote = require('../api/sendgrid/sendQuote');

router.post('/create', async(req,res) => {
    const {_id, name, number, email, desc} = req.body;

    if(!name || !number || !email){
        res.status(400);
        throw new Error('Please include all fields');
    }

    const quote = await Quote.create({
        _id,
        name,
        number,
        email,
        desc
    });

    quote.save();

    sendQuote(quote);

    res.send(req.body);
})

router.get('/', async(req,res) => {

    const quotes = await Quote.find();

    res.send(quotes);
    
})

module.exports = router;