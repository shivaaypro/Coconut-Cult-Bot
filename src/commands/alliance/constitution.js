const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('constitution')
        .setDescription('Display the server constitution'),

    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setTitle('National Constitution')
            .setDescription(`
1. Respect all members.
2. No harassment or discrimination.
3. Follow RP rules.
4. Obey moderator decisions.
5. No spam or abuse.
            `)
            .setColor('Gold');

        await interaction.reply({ embeds: [embed] });
    },
};
