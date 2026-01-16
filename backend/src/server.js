import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import rateLimit from "express-rate-limit";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
//Global Middleware
app.use(cors());
app.use(express.json());

//Security layer  ----> rate limiter
const limiter = rateLimit({
    windowMs: 15*60*1000, //15mins
    max:100,              //max 100 requests per IP
    message:"Too many requests, try again later",
});

app.use(limiter);

app.use("/api/auth", authRoutes); //public router
app.use("/api/user", userRoutes); //protect routes 

app.get("/", (req, res) => {
  res.send("TravelX Backend with MongoDB Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
