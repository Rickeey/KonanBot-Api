//https://konanbot.com
//https://konanbot.com/topmaroc
//https://konanbot.com/api/topmaroc

const axios = require('axios');
const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');

const konanbot = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

konanbot.once('ready', () => {
    console.log(`Logged in as ${konanbot.user.tag}!`);
});

konanbot.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    const prefix = '!'; 

    if (message.content.startsWith(prefix + 'topmaroc')) {

        const apiUrl = 'https://konanbot.com/api/topmaroc';

        try {
            const response = await axios.get(apiUrl);
            const { success, data } = response.data;

            if (!success || !data.length) {
                return message.channel.send({ content: `No leaderboard data is available at the moment.` });

            }

            const embed = new EmbedBuilder()
                .setAuthor({ name: 'Top Servers Related Voice Members', iconURL: `${konanbot.user.displayAvatarURL({ dynamic: true })}`, url: 'https://discord.gg/dctTMk73Gp' })
                .setTitle('Top 10 Server Voice Leaderboard')
                .setFooter({ text: 'Powered by Konan Bot API', iconURL: 'https://cdn.discordapp.com/emojis/1248300099663167520.png' });

            const fields = data.map((guild) => ({
                name: `#${guild.top} - ${guild.tag}`,
                value: `🎙 **Voice Count:** ${guild.score}`,
                inline: false,
            }));

            embed.addFields(fields);

            message.channel.send({ embeds: [embed] });

        } catch (error) {
            message.channel.send('Failed to fetch leaderboard data. Please try again later.');
        }
    }
});

konanbot.login('YOUR BOT TOKEN');
//https://konanbot.com
//https://konanbot.com/topmaroc
//https://konanbot.com/api/topmaroc

/**
 * Copyright (c) 2024 [Master Dev Centre]
 * 
 * This code is protected under copyright law. Unauthorized duplication,
 * distribution, or modification of this code is strictly prohibited.
 * Redistribution without proper authorization will result in penalties.
 *
 * By using this bot, you agree to these terms.
 */

//https://konanbot.com
//https://konanbot.com/topmaroc
//https://konanbot.com/api/topmaroc