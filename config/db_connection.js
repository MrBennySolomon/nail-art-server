const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`${error}`);
  }
};

module.exports = connectDb;