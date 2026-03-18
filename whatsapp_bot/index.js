const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Initialize the client
// We use LocalAuth so you don't have to scan the QR code every time you restart the script
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true, // run in background
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

// Event: Generate QR code for authentication
client.on('qr', (qr) => {
    console.log('Scan the QR code below with your WhatsApp (Linked Devices) to authenticate:');
    qrcode.generate(qr, { small: true });
});

// Event: Client is ready
client.on('ready', () => {
    console.log('Client is ready! The bot is now listening for incoming messages.');
});

// Event: Message received
client.on('message', async (msg) => {
    // You can see what people message you in the console log
    console.log(`Received message from ${msg.from}: ${msg.body}`);

    // Convert message body to lowercase for consistent checking
    const text = msg.body.toLowerCase().trim();

    // Basic automation checks
    if (text === 'hi' || text === 'hello' || text === 'hey') {
        // Reply back to the chat (using the from ID ensures we reply to the right person/group)
        await msg.reply('Jai Hind! Welcome to Arjun Path Defence Academy. How can we help you today?\n\n1. Course Details\n2. Batch Timings\n3. Talk to an Expert');
    } 
    else if (text === '1' || text.includes('course')) {
        await msg.reply('We offer comprehensive NDA and SSB coaching, led by Gp Capt Naval Saini (Retd.). For detailed course structure, please visit our website or let us know if you want to speak with a mentor.');
    }
    else if (text === '2' || text.includes('timing')) {
        await msg.reply('Our new batches start every Monday! Classes run from 9:00 AM to 4:00 PM with dedicated mock interviews in the evening.');
    }
    else if (text === '3' || text.includes('expert')) {
        await msg.reply('You can directly speak to our expert by calling +91 94825 77331 during business hours (9AM-6PM).');
    }
    else if (text === '!ping') {
        // Just a developer test command
        await msg.reply('pong');
    }
});

// Event: Client disconnection
client.on('disconnected', (reason) => {
    console.log('Client was logged out or disconnected:', reason);
});

// Initialize the connection
client.initialize();
