const mongoose = require("mongoose");

const dbconfig = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.qdif83e.mongodb.net/projeto_ifsp?retryWrites=true&w=majority`;
const connection = mongoose.connect(dbconfig);

module.exports = connection;
