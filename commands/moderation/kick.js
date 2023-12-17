const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('kick')
		.setDescription('Выгнать участника сервера.')
		.addUserOption(option => option.setName('target').setDescription('участник которого нужно кикнуть').setRequired(true)),
	async execute(interaction) {
		const member = interaction.options.getMember('target');
		return interaction.reply({ content: `Участник ${member.user.username} был кикнут с сервера`, ephemeral: true });
	},
};
