const express = require('express');
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ponnanasaisaimanikanta:G86HcrkmRJKsHlWV@cluster0.ie22jlu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB Error:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;