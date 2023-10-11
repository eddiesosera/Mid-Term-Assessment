const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { json } = require("body-parser");

require("dotenv").config({ path: '.env' });

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Mongoose Connection
mongoose.connect(
    process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: "dv200_term4_midterm-assessment" //Collection Name
    }
).then(() => {
    console.log("Connected to Database")
}).catch((err) => {
    console.log("Error connecting to Database", err)
});

// Ports
const PORT = process.env.PORT || 5500
app.listen(PORT, () => { console.log("Listening to PORT") })