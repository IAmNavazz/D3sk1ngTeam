exports.run = (client, message) => {
    message.edit({
        embed: {
            author: {
                icon_url: client.user.avatarURL,
            },
            thumbnail: {
                url: 'https://i.imgur.com/9QEq7yx.png'
            },
            fields: [{
                name: 'Initial Troubleshoot for Crash',
                value: `• Restart the Game
• Restart PC
• Load in Story Mode first
• Reinstall Menu ( Delete desk1ng_menu, dsound.dll and d3sk1ng.asi from directory and install fresh files)
• Make sure you have 38(steam) or 39(retail) items in your GTA directory i.e without any mod files including D3sk1ng
• With D3sk1ng... steam = 41, retail = 42
• Load into Story Mode instead of Online
• Run the gta5.exe from ur GTA Directory not from a shortcut (Retail only)
• Run the game as Administrator
• Use different version of menu from #menu-release
• Install newest Windows Update
• Update Drivers (Google for that)
• Set all of the .exe files in your gta 5 directory file to run as admin
• Turn Vsync off from Main Menu>Settings>Graphics 
• Use borderless window instead of Fullscreen
• Turn Antivirus, Firewall or Windows Defender completely off
• Delete the old D3sk1ng or any other mod files in you GTA directory
• Kill useless processes, and scan ur pc for any type of viruses`,
            }],
            footer: {
                text: 'Make sure to read this before asking support more questions.'
            },
            color: 0x427fd6
        }
    });
};
exports.info = {
    name: 'ts',
    description: 'Show users this if they are crashing when injecting.',
    usage: 'crash'
};
