// src/server/codeLoggerServer.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { google } = require('googleapis');
const mongoose = require('mongoose');

const app = express();
const PORT = 4000;
const LOGS_DIR = path.resolve(__dirname, '../../logs');

app.use(cors());
app.use(express.json());

if (!fs.existsSync(LOGS_DIR)) {
  fs.mkdirSync(LOGS_DIR);
}

// Google Sheets setup (user must provide credentials and sheet ID)
// const SHEET_ID = process.env.GOOGLE_SHEET_ID || '1IQAzdgl_1a2oBzXML2x3_k5zRKXLGtypxoKssvVSeiY';
const CREDENTIALS_PATH = path.resolve(__dirname, '../../google-credentials.json');
let sheetsClient = null;

function getSheetsClient() {
  if (sheetsClient) return sheetsClient;
  const auth = new google.auth.GoogleAuth({
    keyFile: CREDENTIALS_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  sheetsClient = google.sheets({ version: 'v4', auth });
  return sheetsClient;
}

async function appendToSheet(range, values) {
  try {
    const sheets = getSheetsClient();
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: { values: [values] },
    });
  } catch (err) {
    console.error('Google Sheets error:', err.message);
  }
}

app.post('/log-code', async (req, res) => {
  const { type, code } = req.body;
  if (!type || !code) {
    return res.status(400).json({ error: 'Missing type or code' });
  }
  const logFile = path.join(LOGS_DIR, `${type}_codes.log`);
  const entry = `${new Date().toISOString()},${code}\n`;
  fs.appendFileSync(logFile, entry, 'utf8');
  // Log to Google Sheets
  await appendToSheet(`${type}_codes!A:B`, [new Date().toISOString(), code]);
  await Contribution.create({ code, type });
  res.json({ success: true });
});

// New endpoint for live session form submissions
app.post('/log-session', async (req, res) => {
  const { name, email, mobile, idea, session, code } = req.body;
  if (!name || !email || !mobile || !idea || !session || !code) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const logFile = path.join(LOGS_DIR, `live_sessions.log`);
  const entry = `${new Date().toISOString()},${code},${name},${email},${mobile},${session},${idea.replace(/\n/g, ' ')}\n`;
  fs.appendFileSync(logFile, entry, 'utf8');
  // Log to Google Sheets
  await appendToSheet('live_sessions!A:G', [
    new Date().toISOString(), code, name, email, mobile, session, idea
  ]);
  res.json({ success: true });
});

// MongoDB setup
const MONGODB_URI = 'mongodb://localhost:27017/shac';
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
  console.log(`Code logger server running on http://localhost:${PORT}`);
});
