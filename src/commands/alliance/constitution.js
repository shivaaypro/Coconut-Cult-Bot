const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('constitution')
        .setDescription('Display the server constitution'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('📜 National Constitution')
            .setDescription(`
**Article I - Respect**
All members must treat each other with respect.

**Article II - Conduct**
Harassment, discrimination, and toxicity are prohibited.

**Article III - Authority**
Moderator and administrator decisions must be respected.

**Article IV - Communication**
Spam, abuse, and disruptive behavior are not allowed.

**Article V - Alliance Loyalty**
Members shall not act against the interests of the National Coconut Union.

**Article VI - Unity**
All members are expected to contribute positively to the growth and success of the community.
            `)
            .setColor('Gold')
            .setFooter({ text: 'National Coconut Union' })
            .setTimestamp();

        await interaction.reply({
            embeds: [embed]
        });
    }
};
