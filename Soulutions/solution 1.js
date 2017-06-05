const Discord = require('discord.js');
exports.run = (bot, msg) => {
   
    const embed = new Discord.RichEmbed()
        .setColor(0x03F620)
        .setAuthor('D3SK1NG Solution Centre', bot.user.avatarURL)
        .setTitle('Solution Number: 1')
        .addField('Problem/Question:','Why cant i use the **Outfits**')
        .addField('Solution', 'D3sk1ng menu currently only support **.ini** file, any **XML** outfits would simply not work')
        .setFooter('If there is no solutions related to your issue please go to #Tech-Support Channel')
         msg.delete();
         msg.channel.sendEmbed(embed);
      return;
       
  };

  exports.info = {
      name: 'solution1',
      description: 'null',
      usage: 'solution1' ,
      credits: 'd3sk1ng team'
  };

  