import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/userRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/data", router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
