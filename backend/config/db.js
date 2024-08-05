import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://harshmaurya:harshmauryafood@cluster0.zkpahcw.mongodb.net/food-del"
    )
    .then(() => {
      console.log("DB connected");
    });
};
