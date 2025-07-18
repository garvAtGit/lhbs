const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: __dirname + "/../.env.local" });

const Coursename = require("../models/Coursename.js");

const courses = [
  {
    slug: "muaythai",
    title: "Muay Thai",
    description: "The deadliest Martial Arts can save your life from uncertain. Learn the core concept of Muay Thai, secretes tricks & techniques of Muay Thai on your mobile, without going anywhere, without paying high fees, without time boundaries and get training from the Bharat’s best coach.",
    price: 500,
  },
  {
    slug: "kungfu",
    title: "Kung-fu",
    description: "Learn the core concept of kung-fu, secretes tricks & techniques of kung-fu on your mobile, without going anywhere, without paying high fees, without time boundaries and get training from the Bharat’s best coach. Different levels and styles available step by step.",
    price: 700,
  },
    // Add more courses here
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Coursename.deleteMany({});
  await Coursename.insertMany(courses);
  console.log("Courses added!");
  mongoose.disconnect();
}

seed();