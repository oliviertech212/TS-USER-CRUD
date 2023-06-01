import express from "express";
import connectDB from "./config/database";
import userRoutes from "./routes/userRoutes";

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON body
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
