const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


const ADMIN_USERNAME = 'admin';

const ADMIN_PASSWORD_HASH = 'admin123'; 

// Admin Login
router.post('/', async (req, res) => {
  const { username, password } = req.body;
  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
  if (!isMatch) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  res.json({ message: 'Admin login successful' });
});

module.exports = router; 