const Discord = require('discord.js');
exports.run = (bot, msg) => {
   
    const embed = new Discord.RichEmbed()
        .setColor(0x03F620)
        .setAuthor('D3SK1NG Solution Centre', bot.user.avatarURL)
        .setTitle('Solution Number: 3')
        .addField('Problem/Question:','My Authentication Details will not save and every time I start GTA I have to re-type them in.')
        .addField('Solution', 'Go to your file explorer and find your gta directory, find the folder called  "D3SK1NG_MENU", enter into it then click on the config file. Enter your Username and Password into the notepad next to the corresponding locations "Username" and "Password". Save it as a new file into your downloads section. Then delete the old version that\'s in the D3SK1NG_MENU folder. Move the newly created one from downloads to the D3SK1NG_MENU folder.')
        .setFooter('If there is no solutions related to your issue please go to #Tech-Support Channel')
         msg.delete();
         msg.channel.sendEmbed(embed);
      return;
       
  };

  exports.info = {
      name: 'solution3',
      description: 'null',
      usage: 'solution3' ,
      credits: 'd3sk1ng team'
  };