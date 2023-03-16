const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv  = require("dotenv").config();
const app     = express();
const port    = process.env.PORT || 3000;

console.log('port', port);

app.use(express.json());
app.use("/users",    require("./routes/userRoutes"));
app.use("/products", require("./routes/productRoutes"));
app.use("/courses",  require("./routes/courseRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));