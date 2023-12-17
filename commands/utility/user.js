const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('Информация о пользователе.'),
	async execute(interaction) {

		await interaction.reply(`Эту команду запустил ${interaction.user.username}, он присоеденился к серверу: ${interaction.member.joinedAt}.`);
	},
};
