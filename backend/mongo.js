const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log("give password as argument");
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://admin:${password}@cluster0.vboqbny.mongodb.net/userApp?retryWrites=true&w=majority`;

mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  wins: Number,
  losses: Number,
  ties: Number,
});

const User = mongoose.model("User", userSchema);

const user = new User({
  id: 1,
  name: "username",
  wins: 0,
  losses: 0,
  ties: 0,
});

user.save().then((result) => {
  console.log("user saved!");
  mongoose.connection.close();
});
