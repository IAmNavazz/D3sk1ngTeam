const Discord = require('discord.js');
exports.run = (bot, msg) => {
   
    const embed = new Discord.RichEmbed()
        .setColor(0x03F620)
        .setAuthor('D3SK1NG Solution Centre', bot.user.avatarURL)
        .setTitle('Solution Number: 2')
        .addField('Problem/Question:','Where is config.ini?')
        .addField('Solution', 'config.ini can be found in a folder called **D3sk1ng_Menu** folder')
        .setFooter('If there is no solutions related to your issue please go to #Tech-Support Channel')
         msg.delete();
         msg.channel.sendEmbed(embed);
      return;
       
  };

  exports.info = {
      name: 'solution2',
      description: 'null',
      usage: 'solution2' ,
      credits: 'd3sk1ng team'
  };