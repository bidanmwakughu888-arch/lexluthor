// ─── Session Manager ───────────────────────────────────────────────────────────
export const SESSION_MANAGER_URL = 'http://localhost:3000';
export const SESSION_ID = 'Neiman_fast-cagey-egypt'; // e.g. "apple-river-stone"

// ─── Bot Identity ──────────────────────────────────────────────────────────────
export const BOT_NAME = 'Luthor MD';
export const BOT_VERSION = '1.0.0';
export const OWNER_NUMBER = '254725693306'; // your number, no +
export const OWNER_NAME = 'Neiman Marcus';

// ─── Command Settings ──────────────────────────────────────────────────────────
export const PREFIX = '.'; // command prefix e.g. .ping .help

// ─── Behaviour ─────────────────────────────────────────────────────────────────
export const AUTO_READ = true;        // mark messages as read automatically
export const AUTO_TYPING = true;      // show typing indicator before responding
export const REPLY_IN_DM_ONLY = false; // if true, bot ignores group messages
export const OWNER_ONLY = false;       // if true, only owner can use commands
export const AUTO_VIEW_STATUS = true;
export const AUTO_LIKE_STATUS = true;
export const WELCOME = true;
export const GOODBYE = true;
export const WELCOME_MESSAGE = '👋 Welcome @{name} to the group!';
export const GOODBYE_MESSAGE = '👋 Goodbye @{name}, we will miss you!';
export const ANTI_DELETE = true;
export const ANTI_LINK = true;

// ─── Connection ────────────────────────────────────────────────────────────────
export const RECONNECT_INTERVAL = 5000;  // ms to wait before reconnecting
export const KEEP_ALIVE_INTERVAL = 15000; // ms between WA ping to stay online
export const SESSION_RETRY_INTERVAL = 10000; // ms to wait before retrying manager