const Discord = require('discord.js');
exports.run = (bot, msg) => {

      const embed = new Discord.RichEmbed()
        .setColor(0xFF0000)
        .setAuthor('IAmNavaz', bot.user.avatarURL)
        .setTitle('What is the difference between Premium & VIP', 'Here is a few things that are diffrent from VIP & Premium')
        .addField('Premium','The Premium version of the mennu has great stuff for trolling or greiving it also has safe **stealth** options it also has instant RP options')
        .addField('VIP', 'VIP version is the most popular choice for most users, it has safe moeny drop options for you or friends you also get early access to to new features before its released on premium, dont be suprised if some features dont work as its not been tested.')
        .addField('Note', 'If you think a feature should be added to the menu feel free to suggest any idea\'s in suggestions channel')
        .setFooter('Looking for specific feature or option?', 'You can always refer back to the menu-features channel')
    
    
      msg.delete();
      msg.channel.sendEmbed(embed);
      return;
       
  };

  exports.info = {
      name: 'vsp',
      description: 'Show the difference between vip & premium',
      usage: 'vsp' ,
      credits: 'd3sk1ng team'
  };