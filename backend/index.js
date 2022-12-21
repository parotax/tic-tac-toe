require("dotenv").config();
const express = require("express");
const cors = require("cors");
const User = require("./models/user");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/users", (request, response) => {
  User.find({}).then((users) => {
    response.json(users);
  });
});

app.get("/api/users/:email", (request, response) => {
  if (request.params.email === undefined) {
    return response.status(400).json({ error: "email missing" });
  }

  User.find({ email: request.params.email }).then((user) => {
    response.json(user);
  });
});

app.post("/api/users/:email/:type", (request, response) => {
  if (request.params.email === undefined) {
    return response.status(400).json({ error: "email missing" });
  } else if (request.params.type === undefined) {
    return response.status(400).json({ error: "type missing" });
  }

  User.findOne({ email: request.params.email }).then((user) => {
    request.newData = { [request.params.type]: user[request.params.type] + 1 };
    User.findOneAndUpdate({ email: request.params.email }, request.newData)
      .then(() => {
        return response.send("Succesfully saved.");
      })
      .catch((err) => {
        return response.status(500).send();
      });
  });
});

app.post("/api/users", (request, response) => {
  const body = request.body;

  if (body.name === undefined) {
    return response.status(400).json({ error: "name missing" });
  } else if (body.email === undefined) {
    return response.status(400).json({ error: "email missing" });
  }

  const user = new User({
    name: body.name,
    email: body.email,
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
