const express = require('express');
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('API is alive! ✅');
});

module.exports = router;
