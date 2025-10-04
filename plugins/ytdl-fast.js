const config = require('../config');
const { cmd } = require('../command');
const { ytsearch } = require('@dark-yasiya/yt-dl.js');
const fetch = require('node-fetch');

// MP4 video download
cmd({
  pattern: "mp4",
  alias: ["video"],
  react: "",
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
    let apiUrl = `https:                                                                               
    let response = await fetch(apiUrl);
    let data = await response.json();
    if (data.status !== 200 || !data.success || !data.result.download_url) {
      console.log('API Error:', data);
      return reply(`//apis.davidcyriltech.my.id/download/ytmp4?url=${encodeURIComponent(yts.url)}`;
    let response = await fetch(apiUrl);
    let data = await response.json();
    if (data.status !== 200 || !data.success || !data.result.download_url) {
      console.log('API Error:', data);
      return reply(`API Error: ${data.message || 'Failed to fetch the video'}`);
    }
    let ytmsg = `*Video Downloader*\n*Title:* ${yts.title}\n*Duration:* ${yts.timestamp}\n*Views:* ${yts.views}\n*Author:* ${yts.author.name}\n*Link:* ${yts.url}`;
    await conn.sendMessage(from, { video: { url: data.result.download_url }, caption: ytmsg, mimetype: "video/mp4" }, { quoted: mek });
  } catch (e) {
    console.log('Error:', e);
    reply("An error occurred. Please try again later.");
  }
});

                    
cmd({
  pattern: "song",
  alias: ["play", "mp3"],
  react: "",
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
    const apiUrl = `// MP3 song download
cmd({
  pattern: "song",
  alias: ["play", "mp3"],
  react: "",
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
    const apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(song.url)}`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (!data?.result?.downloadUrl) {
      console.log('API Error:', data);
      return reply(`API Error: ${data.message || 'Download failed'}`);
    }
    await conn.sendMessage(from, { audio: { url: data.result.downloadUrl }, mimetype: "audio/mpeg", fileName: `${song.title}.mp3` }, { quoted: mek });
  } catch (error) {
    console.log('Error:', error);
    reply("An error occurred. Please try again.");
  }
});
