const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('allianceinfo')
        .setDescription('Display alliance information'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('🏛  Coconut Cult')
            .setDescription(`
👑 Leader: Klaus Von Krass
👥 Members: 20
📅 Founded: July 2026
🌴 Motto: Strength Through Unity
            `)
            .setColor('Gold');

        await interaction.reply({ embeds: [embed] });
    }
};
