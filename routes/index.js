const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use("/pineapple", (req, res) => {
  res.send("<h1>Pineapples!</h1>")
});

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;