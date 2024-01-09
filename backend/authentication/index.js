const { SECRET } = require("../secret");

async function adminMW(req, res, next) {
  if (req.body.password == SECRET) {
    next();
  } else {
    res.send("Access denied");
    return;
  }
}

module.exports = { adminMW };
