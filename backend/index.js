const express = require("express");
const app = express();
const { Card } = require("./db");
const mongoose = require("mongoose");
const cors = require("cors");
const { adminMW } = require("./authentication");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  const allCards = await Card.find({});
  res.send(allCards);
});

app.post("/", adminMW, async (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const interests = req.body.interests;
  const linkedin = req.body.linkedin;
  const twitter = req.body.twitter;
  await Card.create({ name, description, interests, linkedin, twitter });
  res.send("Card created");
});

app.post("/update", adminMW, async (req, res) => {
  const nametoupdate = req.body.nametoupdate;
  const name = req.body.newName;
  const description = req.body.newDescription;
  const interests = req.body.array;
  const linkedin = req.body.linkedin;
  const twitter = req.body.twitter;
  await Card.updateOne(
    { name: nametoupdate },
    {
      $set: {
        name: name,
        description: description,
        interests: interests,
        linkedin: linkedin,
        twitter: twitter,
      },
    }
  );
  res.send("Card updated successfully");
});

app.post("/delete", adminMW, async (req, res) => {
  await Card.deleteOne({ name: req.body.name });
  res.send("Card deleted successfully");
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
