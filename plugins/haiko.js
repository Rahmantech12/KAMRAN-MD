const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "haiko",
    alias: ["thanksto"],
    desc: "thanks to dev for helping",
    category: "main",
    react: "🗯️",
    filename: __filename
},
async (conn, mek, m, { from }) => {
    try {
        const message =`╭━━━⪨FATIMA-𝗠𝗗⪩━━━╮
┃╭╼━━━━━━━━━━━┈⊷
┃┃👨‍💻 𝗗𝗘𝗩:DUA FATIMA
┃┃🪀 𝗡𝗨𝗠𝗕𝗘𝗥:+923155641171
┃┃🛠️ 𝗕𝗡𝗔𝗠𝗘:FATIMA 𝗠𝗗
┃┃🙋‍♂️ 𝗛𝗜: @${m.sender.split("@")[0]}
┃╰╼━━━━━━━━━━━┈⊷
╰╼══════════════╾╯
> *𝑃𝑂𝑊𝐸𝑅𝐸𝐷 𝐵𝑌 FATIMA*`;

        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/i9dtsl.jpg' },
            caption: message,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1000,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363418144382782@newsletter', // remplace avec ton vrai newsletterJid si besoin
                    newsletterName: 'DUA FARIMA',
                    serverMessageId: 1251
                }
            }
        }, { quoted: mek });

    } catch (err) {
        console.error("ThanksTo Error:", err);
        await conn.sendMessage(from, { text: `Error: ${err.message}` }, { quoted: mek });
    }
});

    
