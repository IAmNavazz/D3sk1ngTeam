const Discord = require('discord.js');
exports.run = (bot, msg) => {
   
    const embed = new Discord.RichEmbed()
        .setColor(0x03F620)
        .setAuthor('D3SK1NG Solution Centre', bot.user.avatarURL)
        .setTitle('Solution Number: 5')
        .addField('Problem/Question:','Game crashes')
        .addField('Solution', 'If ur game crashed directly after u loaded story mode follow these steps (it worked for me) Delete ur old config, delete the menu and run the game without ANY mods. When u are in story mode wait 30seconds. Then close ur GTA and add ur menu again.')
        .setFooter('If there is no solutions related to your issue please go to #Tech-Support Channel')
         msg.delete();
         msg.channel.sendEmbed(embed);
      return;
       
  };

  exports.info = {
      name: 'solution5',
      description: 'null',
      usage: 'solution5' ,
      credits: 'd3sk1ng team'
  };

  