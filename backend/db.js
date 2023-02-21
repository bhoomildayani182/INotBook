const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://bhoomildayani182:Bhoomil@1234@inotebook.tjlkwau.mongodb.net/?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("connect to mongo successfully");
    })
}

module.exports = connectToMongo;