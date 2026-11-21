const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const UserRouter = require("./Routers/UserRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", UserRouter);

app.get("/", (req, res) => {
    res.send("Hospital Management Backend Running");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB Connected");

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((err) => {
        console.log("MongoDB Error:", err.message);
    });