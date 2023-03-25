
const cors         = require("cors");
const express      = require("express");
const errorHandler = require("./middleware/errorHandler.js");
const morgan       = require("morgan");
const connectDb    = require("./config/db_connection.js");
const dotenv       = require("dotenv").config({ path: "./config/config.env" });
const app          = express();

const port         = process.env.PORT || 5000;

app.use(express.json());
app.use(errorHandler);
app.use(cors());

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

connectDb();

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Nails-Art API'
  });
});

app.use("/users", require("./routes/userRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/courses", require("./routes/courseRoutes"));

const server = app.listen(port, console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${port}`));
