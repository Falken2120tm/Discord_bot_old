const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('clear')
		.setDescription('Очистка сообщений (от 1 до 99).')
		.addIntegerOption(option => option.setName('количество').setDescription('Количество сообщений которое нужно удалить')),
	async execute(interaction) {
		const amount = interaction.options.getInteger('количество');

		if (amount < 1 || amount > 99) {
			return interaction.reply({ content: 'Введите число от 1 до 99', ephemeral: true });
		}
		await interaction.channel.bulkDelete(amount, true).catch(error => {
			console.error(error);
			interaction.reply({ content: 'Произошла ошибка при удалении сообщений!', ephemeral: true });
		});

		return interaction.reply({ content: `Успешно удалено \`${amount}\` сообщений.`, ephemeral: true });
	},
};
