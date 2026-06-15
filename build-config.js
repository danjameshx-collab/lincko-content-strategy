const fs   = require('fs');
const path = require('path');

const dest = path.join(__dirname, 'Claude Code', 'Lincko', 'Sales Assets', 'general assets', 'firebase-config.js');

const missing = ['FIREBASE_API_KEY','FIREBASE_AUTH_DOMAIN','FIREBASE_DATABASE_URL',
                 'FIREBASE_PROJECT_ID','FIREBASE_STORAGE_BUCKET',
                 'FIREBASE_MESSAGING_SENDER_ID','FIREBASE_APP_ID']
    .filter(k => !process.env[k]);

if (missing.length) {
    console.warn('WARNING: missing env vars:', missing.join(', '));
}

const cfg = `window.FIREBASE_CONFIG = {
    apiKey:            "${process.env.FIREBASE_API_KEY || ''}",
    authDomain:        "${process.env.FIREBASE_AUTH_DOMAIN || ''}",
    databaseURL:       "${process.env.FIREBASE_DATABASE_URL || ''}",
    projectId:         "${process.env.FIREBASE_PROJECT_ID || ''}",
    storageBucket:     "${process.env.FIREBASE_STORAGE_BUCKET || ''}",
    messagingSenderId: "${process.env.FIREBASE_MESSAGING_SENDER_ID || ''}",
    appId:             "${process.env.FIREBASE_APP_ID || ''}"
};
`;

fs.writeFileSync(dest, cfg);
console.log('✓ firebase-config.js written to:', dest);
