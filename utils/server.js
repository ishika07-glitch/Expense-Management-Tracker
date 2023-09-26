const express= require("express");
const morgan=require("morgan");
const colors= require("colors");
const  dotenv= require("dotenv");
const  cors= require("cors");
const connectDb = require("./config/connectDb");

// config dot env file
dotenv.config();

//databse call
connectDb();

//rest object
const app=express();

//middlewars
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
//user routes
app.use("/api/v1/users", require("./routes/userRoute"));
//transections routes
app.use("/api/v1/transactions", require("./routes/transactionRoutes"));

//static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  })
