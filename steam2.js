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
                name: 'Crashing On Steam? (Contd.)',
                value: `3.3- Open my documents - RENAME rockstar games to rockstar games-old
(if using local saves and not cloud - your saves are here / gtav / profiles)
Open program files - delete rockstar games / social club folder.
Open program files x86 - delete rockstar games / social club folder.
Open steam/steamapps/common/gtav/installers - rightclick socialclubsetup - run as admin.
(it should install with NO errors/popups)
Exit steam, rightclick steam, run steam as admin.
Try gtav.
-------------------------
3.4- Google adwcleaner from toolslib and run it to scan/clean your pc.
There are some known programs social club currently has issues with. There could be others.
(hidemyip, astril, safeIPs, and lavasoft softwares - you can also uninstall these)
Try gtav.
(If you have extra firewall/antivirus/security software - temp sleep/disable - it may interfere.)`,
            }],
            footer: {
                text: 'Make sure to read this before asking support more questions.'
            },
            color: 0x427fd6
        }
    });
};
exports.info = {
    name: 'steam2',
    description: 'Show users this if they are crashing when injecting.',
    usage: 'crash'
};
