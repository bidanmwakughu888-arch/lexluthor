// fun.js — Fun commands plugin
import axios from 'axios';

// ── Magic 8 Ball responses (local, no API needed) ──────────────────────────
const eightBallResponses = [
    'It is certain 🎱',
    'It is decidedly so 🎱',
    'Without a doubt 🎱',
    'Yes definitely 🎱',
    'You may rely on it 🎱',
    'As I see it, yes 🎱',
    'Most likely 🎱',
    'Outlook good 🎱',
    'Yes 🎱',
    'Signs point to yes 🎱',
    'Reply hazy, try again 🎱',
    'Ask again later 🎱',
    'Better not tell you now 🎱',
    'Cannot predict now 🎱',
    'Concentrate and ask again 🎱',
    "Don't count on it 🎱",
    'My reply is no 🎱',
    'My sources say no 🎱',
    'Outlook not so good 🎱',
    'Very doubtful 🎱'
];

// ── Corporate BS (local, no API needed) ───────────────────────────────────
const buzzwords1 = ['leverage', 'synergize', 'disrupt', 'optimize', 'revolutionize', 'ideate', 'pivot', 'streamline', 'monetize', 'gamify'];
const buzzwords2 = ['cross-functional', 'agile', 'scalable', 'data-driven', 'cloud-native', 'customer-centric', 'best-in-class', 'bleeding-edge', 'holistic', 'omnichannel'];
const buzzwords3 = ['ecosystems', 'synergies', 'paradigms', 'deliverables', 'bandwidth', 'frameworks', 'pipelines', 'workflows', 'touchpoints', 'KPIs'];

function generateCorporateBS() {
    const w1 = buzzwords1[Math.floor(Math.random() * buzzwords1.length)];
    const w2 = buzzwords2[Math.floor(Math.random() * buzzwords2.length)];
    const w3 = buzzwords3[Math.floor(Math.random() * buzzwords3.length)];
    return `We need to ${w1} our ${w2} ${w3} going forward. 💼`;
}

// ── Commands ───────────────────────────────────────────────────────────────

export async function handleFunCommand(sock, msg, command, args) {
    const from = msg.key.remoteJid;

    switch (command) {

        case 'meme': {
            try {
                const { data } = await axios.get('https://api.imgflip.com/get_memes');
                const memes = data.data.memes;
                const meme = memes[Math.floor(Math.random() * memes.length)];
                await sock.sendMessage(from, {
                    image: { url: meme.url },
                    caption: `😂 *${meme.name}*`
                }, { quoted: msg });
            } catch {
                await sock.sendMessage(from, { text: '❌ Could not fetch meme' }, { quoted: msg });
            }
            break;
        }

        case 'yesno': {
            try {
                const { data } = await axios.get('https://yesno.wtf/api');
                await sock.sendMessage(from, {
                    image: { url: data.image },
                    caption: `${data.answer.toUpperCase() === 'YES' ? '✅ YES' : data.answer.toUpperCase() === 'NO' ? '❌ NO' : '🤔 MAYBE'}`
                }, { quoted: msg });
            } catch {
                await sock.sendMessage(from, { text: '❌ Could not fetch answer' }, { quoted: msg });
            }
            break;
        }

        case 'insult': {
            try {
                const { data } = await axios.get('https://evilinsult.com/generate_insult.php?lang=en&type=json');
                await sock.sendMessage(from, { text: `😈 ${data.insult}` }, { quoted: msg });
            } catch {
                await sock.sendMessage(from, { text: '❌ Could not fetch insult' }, { quoted: msg });
            }
            break;
        }

        case 'bs': {
            await sock.sendMessage(from, { text: generateCorporateBS() }, { quoted: msg });
            break;
        }

        case 'joke': {
            try {
                const { data } = await axios.get('https://icanhazdadjoke.com/', {
                    headers: { Accept: 'application/json' }
                });
                await sock.sendMessage(from, { text: `😄 ${data.joke}` }, { quoted: msg });
            } catch {
                await sock.sendMessage(from, { text: '❌ Could not fetch joke' }, { quoted: msg });
            }
            break;
        }

        case 'bored': {
            try {
                const { data } = await axios.get('https://www.boredapi.com/api/activity');
                await sock.sendMessage(from, {
                    text: `😴 *Bored? Try this:*\n\n${data.activity}\n\n_Type: ${data.type} | Participants: ${data.participants}_`
                }, { quoted: msg });
            } catch {
                await sock.sendMessage(from, { text: '❌ Could not fetch activity' }, { quoted: msg });
            }
            break;
        }

        case '8ball': {
            if (!args.length) {
                await sock.sendMessage(from, { text: '❓ Ask a question! Example: .8ball Will I be rich?' }, { quoted: msg });
                break;
            }
            const response = eightBallResponses[Math.floor(Math.random() * eightBallResponses.length)];
            await sock.sendMessage(from, {
                text: `🎱 *Question:* ${args.join(' ')}\n\n*Answer:* ${response}`
            }, { quoted: msg });
            break;
        }

        default:
            return false; // command not handled here
    }

    return true;
}

export const funCommands = ['meme', 'yesno', 'insult', 'bs', 'joke', 'bored', '8ball'];