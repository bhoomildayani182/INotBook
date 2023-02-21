const mongoose = require('mongoose');

const connectToMongo = () => {
    mongoose
    .connect(
      "mongodb+srv://rajbusa:hVXlUdJ1iGqrEara@cluster0.w18p2pv.mongodb.net/test",
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
    )
    .then(() => {
      console.log("Connected to database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. \n${err}`);
    });
}

module.exports = connectToMongo;
// mongodb+srv://bhoomildayani182:fAFbrbP8n8Ooemi2@cluster0.pvcmcei.mongodb.net/test