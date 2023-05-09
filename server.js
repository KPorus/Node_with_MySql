require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 8000;
// middle wares
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 1000000 })
);

// routers
const router = require("./routes/allRoute");

app.use("/api/users", router)

app.get("/", (req, res) => {
  res.send("I am watching you");
});

app.listen(port, () => {
  console.log(`server is runnning at ${port}`);
});
