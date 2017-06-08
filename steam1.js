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
                name: 'Crashing On Steam?',
                value: `1. What version do you use?
=> 5.2.2 doesnt work with steam so please download 6.0. Note that 6.0 is VIP exclusive. Premium users you can either upgrade to VIP or wait for update.

2. Crash even with 6.0?
=> Try all points from Troubleshoot

3. Crashing with 6.0 even after trying all from troubleshoot?

3.1- Lower DirectX version and change back again from Main MenuSetting>Graphics>Directx
--------------------------
3.2- Restart the entire computer
Exit steam, rightclick steam, run steam as admin.
Open gtav folder. (rightclick gtav in steam - properties - local files - browse local files.)
Enable viewing of file extensions/ show hidden/protected files. (google if you dont know how)
Delete anything that is NOT a folder AND is NOT a .RPF file.
VERIFY CACHE. (rightclick gtav in steam, properties, local files, verify integrity)
Try GTA V.`,
            }],
            footer: {
                text: 'Make sure to read this before asking support more questions.'
            },
            color: 0x427fd6
        }
    });
};
exports.info = {
    name: 'steam1',
    description: 'Show users this if they are crashing when injecting.',
    usage: 'crash'
};
