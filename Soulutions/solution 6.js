const Discord = require('discord.js');
exports.run = (bot, msg) => {
   
    const embed = new Discord.RichEmbed()
        .setColor(0x03F620)
        .setAuthor('D3SK1NG Solution Centre', bot.user.avatarURL)
        .setTitle('Solution Number: 6')
        .addField('Problem/Question:','Possible fix for Steam Crash')
        .addField('Solution', 'Make sure steam is completely closed (even from background) before installing menu.')
        .setFooter('If there is no solutions related to your issue please go to #Tech-Support Channel')
         msg.delete();
         msg.channel.sendEmbed(embed);
      return;
       
  };

  exports.info = {
      name: 'solution6',
      description: 'null',
      usage: 'solution6' ,
      credits: 'd3sk1ng team'
  };

  