const mongoose = require("mongoose");
const faker = require("faker");

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/users";

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  location: {
    latitude: Number,
    longitude: Number,
  },
});

const User = mongoose.model("User", userSchema);

// Generate Mock Data
const generateMockData = async () => {
  const users = [];
  for (let i = 0; i < 100; i++) {
    const user = new User({
      name: faker.name.findName(),
      location: {
        latitude: faker.address.latitude(),
        longitude: faker.address.longitude(),
      },
    });
    users.push(user);
  }

  try {
    await User.insertMany(users);
    console.log("Mock data inserted successfully");
    process.exit();
  } catch (error) {
    console.error("Error inserting mock data:", error);
    process.exit(1);
  }
};

generateMockData();
