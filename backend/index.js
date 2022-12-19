const express = require("express");
const app = express();

app.use(express.json());

let users = [
  {
    id: 1,
    wins: 5,
    name: "y",
  },
  {
    id: 2,
    wins: 2,
    name: "z",
  },
  {
    id: 3,
    wins: 1,
    name: "x",
  },
];

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (request, response) => {
  const id = Number(request.params.id);
  const user = users.find((user) => user.id === id);

  if (user) {
    response.json(user);
  } else {
    response.status(404).end();
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
