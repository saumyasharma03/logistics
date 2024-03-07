// backend/routes.js
const express = require('express');
const router = express.Router();

router.post('/message', (req, res) => {
  const { message } = req.body;
  console.log('Received message:', message);
  res.json({ response: 'Message received successfully' });
});

module.exports = router;
