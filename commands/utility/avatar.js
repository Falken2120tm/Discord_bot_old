const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Получить аватар пользователя.')
		.addUserOption(option => option.setName('target').setDescription('Аватар пользователя для показа')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
		if (user) return interaction.reply(`${user.username} аватар: ${user.displayAvatarURL({ dynamic: true })}`);
		return interaction.reply(`Ваш аватар: ${interaction.user.displayAvatarURL()}`);
	},
};
