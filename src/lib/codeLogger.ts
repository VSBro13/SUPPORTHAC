// utils/codeLogger.ts
// Utility to save generated codes to an internal log file

import fs from 'fs';
import path from 'path';

const LOGS_DIR = path.resolve(__dirname, '../logs');

export function saveCodeLog(type: string, code: string) {
  if (!fs.existsSync(LOGS_DIR)) {
    fs.mkdirSync(LOGS_DIR);
  }
  const logFile = path.join(LOGS_DIR, `${type}_codes.log`);
  const entry = `${new Date().toISOString()},${code}\n`;
  fs.appendFileSync(logFile, entry, 'utf8');
}

// Usage example (in payment pages):
// import { saveCodeLog } from '@/lib/codeLogger';
// saveCodeLog('coffee', code);
