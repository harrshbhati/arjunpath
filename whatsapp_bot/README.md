# Arjun Path WhatsApp Auto-Reply Bot

This is a basic WhatsApp automation bot built using Node.js and `whatsapp-web.js`. It runs locally on your machine, links to your WhatsApp account (like WhatsApp Web), and automatically replies to specific keywords like "hi", "course", "timing", and "expert".

## Prerequisites
- **Node.js**: Make sure you have Node.js installed on your computer.

## How to Run the Bot

1. Open a terminal or command prompt in this `whatsapp_bot` folder.
2. Run the following command:
   ```bash
   node index.js
   ```
3. A large **QR Code** will appear in your terminal.
4. On your mobile phone (with the number +91 94825 77331):
   - Open WhatsApp.
   - Tap the three dots (Menu) or Settings.
   - Tap **Linked Devices**.
   - Tap **Link a Device** and scan the QR code on your computer screen.
5. The terminal will log `Client is ready!` once connected.
6. The bot is now actively listening for incoming messages! Ensure your computer stays on and the terminal remains open while you want the bot to run.

## Supported Commands / Keywords
When a user sends exactly these keywords (case-insensitive), the bot will auto-reply:
- `hi`, `hello`, `hey` -> Welcome message & Menu
- `1` or `course` -> Course Details
- `2` or `timing` -> Batch Timings
- `3` or `expert` -> Contact Info
- `!ping` -> Tests if the bot is alive (replies `pong`)

## Tips
- To stop the bot, press `Ctrl + C` in the terminal.
- The session is saved locally in a `.wwebjs_auth` folder, meaning you won't need to scan the QR code every time you restart the script. If you ever want to log out, simply stop the script and delete that folder.
