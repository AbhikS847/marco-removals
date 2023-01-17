const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('../middleware/errorMiddleware');
const connectDB = require('../config/db');
const cors = require('cors');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(cors({
    origin:'*'
}))

app.use('/booking', require('../routes/bookingRoutes'));

app.use(errorHandler);

//* Serve static assets in production, must be at this location of this file
if (process.env.NODE_ENV === 'production') {
    //*Set static folder
    app.use(express.static('marco-booking/build'));
    
    app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'marco-booking', 'build','index.html')));
  }

const port = process.env.PORT || 5000;

app.get("/", (req,res) => {

})

app.listen(port, () => {console.log(`Server is running on port ${port}`)});