// src/server/codeLoggerServer.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 4000;
const LOGS_DIR = path.resolve(__dirname, '../../logs');

app.use(cors());
app.use(express.json());

if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR);
}

app.post('/log-code', (req, res) => {
  const { type, code } = req.body;
  if (!type || !code) {
    return res.status(400).json({ error: 'Missing type or code' });
  }
  const logFile = path.join(LOGS_DIR, `${type}_codes.log`);
  const entry = `${new Date().toISOString()},${code}\n`;
  fs.appendFileSync(logFile, entry, 'utf8');
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Code logger server running on http://localhost:${PORT}`);
});
