const fetch = require("node-fetch");

module.exports = {
	name: 'dolar',
	description: 'Display BTC price on USD.',
	execute(message, args, client, Discord) {
        (async () => {
            const response = await fetch('https://api.bluelytics.com.ar/v2/latest');
            const json = await response.json();

            const embedMessage = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`Dolar:`)
                .addFields(
                    { name: 'Oficial', value: `${(json.oficial && json.oficial.value_avg).toFixed(2)}` },
                    { name: 'Blue', value: `${(json.blue && json.blue.value_avg).toFixed(2)}` },
                );
            
            message.channel.send(embedMessage);
        })();
	},
};