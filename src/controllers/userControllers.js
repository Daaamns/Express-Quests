const database = require("../../database");

const getUsers = (req, res) => {
  database.query("select * from users").then(([users]) => {
    res.json(users);
    res.status(200);
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users where id = ?", [id])
    .then(([users]) => {
      if (users[0] != null) {
        res.json(users[0]);
        res.sendStatus(200);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  getUsers,
  getUserById,
};
