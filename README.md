# LEX LUTHOR MD

<p align="center">
  <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazE4Y2swMjl0ZGR3d3hxbmp0cHFwMHF2dWtveWxkZ2c1MGd6cHYxOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PrVAwWYQl1JPG/giphy.gif" width="40%" />
</p>

**Make sure you fork and star please**

[![Fork](https://img.shields.io/github/forks/engineermarcus/lex-luthor?style=for-the-badge&color=black)](https://github.com/engineermarcus/lex-luthor/fork)

Your WhatsApp contacts have no idea what's about to hit them.

---

[![Session](https://img.shields.io/website?url=https%3A%2F%2Flexluthermd.onrender.com&style=for-the-badge&logo=render&label=GET+SESSION&color=black)](https://lexluthermd.onrender.com)

---

## WHAT IT DOES

Reads your statuses. Likes them too. Converts your terrible memes into stickers. Translates messages you were too proud to admit you didn't understand. Responds to commands while you sleep.

It doesn't need your supervision. That's the point.

---

## KEY FEATURES

| Feature | Details |
|---|---|
| Status automation | Views and reacts automatically |
| Sticker conversion | Images, videos, GIFs — all fair game |
| Translation | .swahili, .english, .french — reply or type |
| Text to speech | .tts — reply or type |
| Group management | Kick, mute, antilink, welcome/goodbye |
| Fun commands | memes, jokes, 8ball, insults and more |
| Anti-delete | Catches deleted messages and exposes them |
| **Auto-reconnect** | Survives crashes and server downtime |
| **Health monitoring** | Self-healing and stays alive 24/7 |

---

## 🚀 DEPLOY ON RENDER (RECOMMENDED - STABLE)

### Prerequisites
1. Get your session ID from [here](https://lexluthermd.onrender.com)
2. Fork this repository

### Deploy Steps

1. Go to [render.com](https://render.com) and create a new **Web Service**
2. Connect your forked GitHub repository
3. Render will auto-detect the `render.yaml` and `Dockerfile`
4. Set these environment variables:

| Key | Value |
|---|---|
| `SESSION_ID` | Your session ID from session manager |
| `OWNER_NUMBER` | Your WhatsApp number (without +) |

5. Click **Deploy**

### ⚠️ IMPORTANT: Keep it Alive 24/7

Render's free tier sleeps after 15 minutes of inactivity. **You MUST set up UptimeRobot** to keep your bot running 24/7.

#### Setup UptimeRobot (Takes 2 minutes):

1. **Go to** 👉 [https://uptimerobot.com](https://uptimerobot.com)
2. **Create a free account** (no credit card needed)
3. **Click "Add New Monitor"**
4. **Fill in:**
   - **Monitor Type:** HTTP(s)
   - **Friendly Name:** Lex Luthor Bot
   - **URL:** `https://your-app-name.onrender.com/ping`
     - Replace `your-app-name` with your actual Render app name
     - Example: `https://lexluthor-abc123.onrender.com/ping`
   - **Monitoring Interval:** 5 minutes
5. **Click "Create Monitor"**

**Done!** Your bot will now stay alive 24/7. UptimeRobot will ping it every 5 minutes, preventing Render from putting it to sleep. 🔥

#### How to Find Your Render App URL:
1. Go to your Render dashboard
2. Click on your deployed app
3. Copy the URL at the top (looks like `https://lexluthor-xyz.onrender.com`)
4. Add `/ping` to the end: `https://lexluthor-xyz.onrender.com/ping`

---

## DEPLOY ON TERMUX

```sh
# Give storage permissions
termux-setup-storage

# Update system packages 
apt update && apt upgrade -y

# Install essentials 
apt install git nodejs ffmpeg libwebp python3 micro vim -y

# Clone the repository 
git clone https://github.com/engineermarcus/lexluthor && cd lexluthor

# Install dependencies
npm install

# Edit settings.js directly (add your SESSION_ID and OWNER_NUMBER)
micro settings.js

# Run the bot 
npm run luthor
```

> `Ctrl+S` to save. `Ctrl+Q` to quit.

---

## DEPLOY VPS / CODESPACES / LOCAL MACHINE

```sh
# Clone the repo
git clone https://github.com/engineermarcus/lexluthor && cd lexluthor

# Install dependencies 
npm install

# Edit settings.js with your SESSION_ID and OWNER_NUMBER
nano settings.js

# Run
npm run luthor
```

### Keep it alive with PM2:
```sh
npm install -g pm2
pm2 start main.js --name luthor
pm2 save
pm2 startup
```

---

## DEPLOY WITH DOCKER

```sh
# Clone
git clone https://github.com/engineermarcus/lexluthor && cd lexluthor

# Edit settings.js with your SESSION_ID and OWNER_NUMBER
nano settings.js

# Build the docker image 
docker build -t lexluthor .

# Run it
docker run -d --name luthor --restart unless-stopped lexluthor
```

---

## 🛠️ CONFIGURATION

Edit `settings.js` file directly (no .env needed):

```javascript
// Essential
export const SESSION_ID = 'your_session_id_here';
export const OWNER_NUMBER = '254700000000'; // No + sign

// Features (true/false)
export const WELCOME = true;
export const GOODBYE = true;
export const ANTI_DELETE = true;
export const ANTI_LINK = true;
export const AUTO_VIEW_STATUS = true;
export const AUTO_LIKE_STATUS = true;

// Auto Presence (typing, recording, online, none)
export const AUTO_PRESENCE = 'typing';

// Customize messages
export const WELCOME_MESSAGE = '👋 Welcome @{name} to the group!';
export const GOODBYE_MESSAGE = '👋 Goodbye @{name}, we will miss you!';
```

---

## 📡 API ENDPOINTS

Your bot exposes these endpoints:

- `GET /status` - Check bot status
- `GET /ping` - Keepalive endpoint (use for UptimeRobot)
- `POST /send` - Send messages programmatically
- `POST /restart` - Restart the bot

---

## 🐛 TROUBLESHOOTING

### Bot not connecting?
1. Make sure your SESSION_ID is valid
2. Check if you're logged out on your phone
3. Get a fresh session from the session manager

### Welcome/Goodbye not working?
- Make sure `WELCOME` and `GOODBYE` are set to `true` in settings.js
- Bot doesn't need admin for welcome/goodbye (just regular messages)
- Check console logs when someone joins/leaves

### Bot keeps going offline on Render?
- **Did you set up UptimeRobot?** This is MANDATORY for Render free tier
- Check your Render logs for errors
- Make sure the ping URL is correct

### Commands not responding?
- Check your PREFIX setting in settings.js (default is `.`)
- Make sure you're using the right syntax: `.ping`, `.menu`, etc.
- Check console logs to see if bot is receiving messages

### Bot slow to respond?
- Make sure you're using the optimized `group.js` with caching
- Check if you have the latest version from GitHub

---

## 📝 COMMANDS

### Core
- `.ping` - Check if bot is alive
- `.alive` - Bot status with uptime
- `.menu` / `.help` - Show all commands

### Utility
- `.sticker` / `.s` - Convert image/video to sticker (reply to media)
- `.toimg` - Convert sticker to image
- `.tts <text>` - Text to speech
- `.english` / `.swahili` / `.french` etc. - Translate

### Fun
- `.meme` - Random meme
- `.joke` - Dad joke
- `.8ball <question>` - Magic 8 ball
- `.insult` - Roast someone
- `.yesno` - Yes or no with GIF

### Group (Owner Only)
- `.kick` - Kick user (reply) - **Needs admin**
- `.mute` - Mute user (reply) - **Needs admin to delete**
- `.unmute` - Unmute user
- `.muteall` - Mute entire group - **Needs admin to delete**
- `.unmuteall` - Unmute group
- `.stalk` - DM a user (reply)
- `.stalkall` - DM all members (dangerous!)

**Note:** Welcome/Goodbye work without admin privileges!

---

## 🔒 SECURITY NOTES

- Never share your SESSION_ID
- Don't commit settings.js with your real SESSION_ID to GitHub
- The bot stores session data in `bot_session/` folder
- Your phone can be off - bot runs independently

---

## 💡 PRO TIPS

- **Bot works even when your phone is off** - Session is stored on the server
- **Set AUTO_PRESENCE to 'recording'** for a cooler status effect
- **Use PM2 on VPS** for automatic restarts if bot crashes
- **UptimeRobot is mandatory** for Render deployments (free tier sleeps)
- **Check logs regularly** to catch any issues early

---

## 🤝 CONTRIBUTING

Pull requests are welcome. For major changes, please open an issue first.

---

## ⚖️ LICENSE

MIT - Do whatever you want, just don't blame me.

---

## 💬 SUPPORT

Having issues? Open an issue on GitHub.

---

*Neiman Tech — 2025. Lex Luthor MD was not built for amateurs.*