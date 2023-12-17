const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Показать информацию о сервере.'),
	async execute(interaction) {
		return interaction.reply(`Имя сервера: ${interaction.guild.name}\nКоличество участников: ${interaction.guild.memberCount}`);
	},
};
