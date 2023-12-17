const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stereo')
		.setDescription('bazyet'),
	async execute(interaction) {
		return interaction.reply('baza');
	},
};
