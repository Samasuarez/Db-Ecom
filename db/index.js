const mongoose = require("mongoose");
// const {dbAdmin, dbPassword,dbHost } = require('../src/config/db.config')s

const mongoConect = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://sama:amas@cluster0.kxtdce9.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log("db conected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = mongoConect;

