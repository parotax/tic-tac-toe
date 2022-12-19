const express = require("express");
const cors = require("cors");
require("dotenv").config();
const User = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());

const generateId = () => {
  User.find({}).then((users) => {
    const maxId = Math.max(...users.map((user) => user.id));
    if (users.length === 0) return 1;
    return maxId + 1;
  });
};

app.get("/api/users", (request, response) => {
  User.find({}).then((users) => {
    request.json(users);
  });
});

app.post("/api/users", (request, response) => {
  const body = request.body;

  if (body.name === undefined) {
    return response.status(400).json({ error: "name missing" });
  }

  const user = new User({
    id: generateId(),
    name: body.name,
    wins: 0,
    losses: 0,
    ties: 0,
  });

  user.save().then((savedUser) => {
    response.json(savedUser);
  });
});

app.get("/api/leaderboard", (request, response) => {
  User.find({}).then((users) => {
    users.sort((a, b) => b.wins - a.wins);
    response.json(users.slice(0, 8));
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
