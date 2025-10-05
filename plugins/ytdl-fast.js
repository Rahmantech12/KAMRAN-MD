// FIX 1: 'Const' ko 'const' se badla gaya
const config = require('../config');
const { cmd } = require('../command');
const { ytsearch } = require('@dark-yasiya/yt-dl.js');
// FIX 2: 'axios' library ko import kiya gaya 'fetch' ki jagah use karne ke liye.
const axios = require('axios'); 


// MP4 video download

cmd({ 
    pattern: "mp4", 
    alias: ["video"], 
    react: "🎵", 
    desc: "Download YouTube video", 
    category: "main", 
    use: '.mp4 < Yt url or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or video name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");
        
        let yts = yt.results[0];  
        let apiUrl = `https://api.nexoracle.com/downloader/yt-audio2?url=${encodeURIComponent(yts.url)}`;
        
        // FIX 2: 'fetch' ki jagah 'axios' use kiya gaya
        let response = await axios.get(apiUrl);
        let data = response.data;
        
        if (data.status !== 200 || !data.success || !data.result.download_url) {
            return reply("Failed to fetch the video. Please try again later.");
        }

        // FIX 3: Non-ASCII characters ko standard Emojis se badla gaya
        let ytmsg = `📹 *Video Downloader*
🎬 *Title:* ${yts.title}
⏳ *Duration:* ${yts.timestamp}
👁️ *Views:* ${yts.views}
👤 *Author:* ${yts.author.name}
🔗 *Link:* ${yts.url}
> 🅳🆄🅰 🅵🅰🆃🅸🅼🅰 ❤️`;

        // Send video directly with caption
        await conn.sendMessage(
            from, 
            { 
                video: { url: data.result.download_url }, 
                caption: ytmsg,
                mimetype: "video/mp4"
            }, 
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});

// MP3 song download 

cmd({ 
    pattern: "song", 
    alias: ["play", "mp3"], 
    react: "🎵", 
    desc: "Download YouTube song", 
    category: "main", 
    use: '.song <query>', 
    filename: __filename 
}, async (conn, mek, m, { from, sender, reply, q }) => { 
    try {
        if (!q) return reply("Please provide a song name or YouTube link.");

        const yt = await ytsearch(q);
        if (!yt.results.length) return reply("No results found!");

        const song = yt.results[0];
        const apiUrl = `https://jawad-tech.vercel.app/download/yt/mp3?url=${encodeURIComponent(song.url)}`;
        
        // FIX 2: 'fetch' ki jagah 'axios' use kiya gaya
        const res = await axios.get(apiUrl);
        const data = res.data;

        if (!data?.result?.downloadUrl) return reply("Download failed. Try again later.");

    await conn.sendMessage(from, {
    audio: { url: data.result.downloadUrl },
    mimetype: "audio/mpeg",
    fileName: `${song.title}.mp3`,
    contextInfo: {
        externalAdReply: {
            title: song.title.length > 25 ? `${song.title.substring(0, 22)}...` : song.title,
            body: "THIS IS DUA FATIMA",
            mediaType: 1,
            thumbnailUrl: song.thumbnail.replace('default.jpg', 'hqdefault.jpg'),
            sourceUrl: 'https://whatsapp.com/channel/0029VbAhxYY90x2vgwhXJV3O',
            mediaUrl: 'https://whatsapp.com/channel/0029VbAhxYY90x2vgwhXJV3O',
            showAdAttribution: false,
            renderLargerThumbnail: false
        }
    }
}, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply("An error occurred. Please try again.");
    }
});
    
