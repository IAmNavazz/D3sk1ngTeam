const Discord = require('discord.js');
exports.run = (bot, msg) => {
   
    const embed = new Discord.RichEmbed()
        .setColor(0x03F620)
        .setAuthor('D3SK1NG TEAM', bot.user.avatarURL)
        .setTitle('What is the difference between Premium & VIP', 'Here is a few things that are diffrent from VIP & Premium')
        .addField('Premium','The Premium version of the menu has great stuff for trolling or griefing. It also has safe stealth and instant RP options.')
        .addField('VIP', 'The VIP version is the most popular choice for most users, it has safe money drop options for you or friends you also get early access to to new features before its released on premium, dont be suprised if some features dont work as its not been tested..')
        .addField('Note', 'If you think a feature should be added to the menu feel free to suggest any idea\'s in suggestions channel')
        .setFooter('Looking for specific feature or option? You can always refer back to the menu-features channel')
         msg.delete();
         msg.channel.sendEmbed(embed);
      return;
       
  };

  exports.info = {
      name: 'v2p',
      description: 'null',
      usage: 'v2p' ,
      credits: 'd3sk1ng team'
  };

  