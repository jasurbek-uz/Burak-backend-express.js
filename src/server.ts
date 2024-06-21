import dotenv from "dotenv";
dotenv.config();
// Connect MongoDB via Mongoose
import mongoose from "mongoose";
import app from "./app";



mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connected successfully!");
    const PORT = process.env.PORT ?? 3003;
    
    app.listen(PORT, () => {
      console.info(`Server is running on port: ${PORT}`);    
      console.info(`Admin project on http://localhost:${PORT}/admin \n`)
    });
    
  })
  .catch((err) => {
    console.log("An error occured whie connecting to MongoDB:", err.message);
  });
