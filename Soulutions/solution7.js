const Discord = require('discord.js');
exports.run = (bot, msg) => {
   
    const embed = new Discord.RichEmbed()
        .setColor(0x03F620)
        .setAuthor('D3SK1NG Solution Centre', bot.user.avatarURL)
        .setTitle('Solution Number: 7')
        .addField('Problem/Question:','Game is crashing when i log in')
        .addField('Solution', '**PLEASE ANSWER ALL THE QUESTIONS**\n-Did you have antivirus?\n-Did you use any other menu before?\n-Did you have all drivers updated?\nDid you run your gta as admin?\n-Did your gta is on Windowed mode?\n-Did you try to delete the Config.ini?')
        .setFooter('If there is no solutions related to your issue please go to #Tech-Support Channel')
         msg.delete();
         msg.channel.sendEmbed(embed);
      return;
       
  };

  exports.info = {
      name: 'solution7',
      description: 'null',
      usage: 'solution7' ,
      credits: 'd3sk1ng team'
  };

  