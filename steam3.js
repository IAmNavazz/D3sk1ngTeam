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
                value: `3.5- Open steam/steamapps/common/gtav/_commonredist/vcredist/2012-
Run both .exe - and uninstall. Run both again and install.
Open steam/steamapps/common/gtav/_commonredist/directx/jun2010
Run dxsetup - restart pc.

(For directx - you can also try-----Delete all d3d*.* files from windows/system32 and windows/syswow64. Some will not/cannot be deleted - skip them)
Reinstall directx with websetup - https://www.microsoft.com/en-us/download/details.aspx?id=35

I would also grab DDU, use it in safemode to uninstall your gpu drivers. Install them again clean.
DDU -- > http://www.guru3d.com/files-details/display-driver-uninstaller-download.html
Try gtav.`,
            }],
            footer: {
                text: 'Make sure to read this before asking support more questions.'
            },
            color: 0x427fd6
        }
    });
};
exports.info = {
    name: 'steam3',
    description: 'Show users this if they are crashing when injecting.',
    usage: 'crash'
};
