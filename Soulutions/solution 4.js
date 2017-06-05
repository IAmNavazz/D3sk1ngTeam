const Discord = require('discord.js');
exports.run = (bot, msg) => {
   
    const embed = new Discord.RichEmbed()
        .setColor(0x03F620)
        .setAuthor('D3SK1NG Solution Centre', bot.user.avatarURL)
        .setTitle('Solution Number: 49')
        .addField('Problem/Question:','How to install the skip prologue files')
        .addField('Solution', 'After downloading the files from #extra-files , open up the Unlock & Skip Files within the Prologue_Skip.zip. Then, go to your documents, then rockstar games, GTA 5 and then profiles. Open up your latest profile (click date modified and it will sort them in either most or least recent depending on how many times you click it), open it up and just drag the two files from the folder into your profile.')
        .setFooter('If there is no solutions related to your issue please go to #Tech-Support Channel')
         msg.delete();
         msg.channel.sendEmbed(embed);
      return;
       
  };

  exports.info = {
      name: 'solution4',
      description: 'null',
      usage: 'solution4' ,
      credits: 'd3sk1ng team'
  };

  