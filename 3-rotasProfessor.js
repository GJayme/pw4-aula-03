const router = require("express").Router();

router.get("/:nome", (req, res) => {
  res.send(`informações sobre ${req.params.nome}`);
});

module.exports = router;
