require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.send("Welcome to the Product API");
});

// API routes
app.use('/api/products', productRoute);

// connect to mongodb and start the server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on http://localhost:3000");
        });
    })
    .catch((error) => {
        console.log("Failed to connect to MongoDB:", error.message);
    });

// global error handler
app.use((err, req, res, next) => {
    res.status(500).json({
        error: err.message || "Something went wrong"
    });
}) 