const router = require("express").Router();

router.get("/sobre", (req, res) => {
  res.send("tratando a rota no arquivo separado");
});

router.use("/professor", require("./3-rotasProfessor"));

module.exports = router;
