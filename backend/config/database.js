const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(`Successfully connected to the database with host: ${mongoose.connection.host}`);
    })
    .catch((error) => {
      console.error('Connection to the database failed:', error);
    });
};

module.exports = connectDatabase;
