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
                name: 'Welcome to Desking Tech Support',
                value: `UPDATE -  	Go through #announcements and #exclusive-announcements for updates. 

PROBLEM - 	Go through #faq-info and #solutions in case you have a problem with menu.
			      Go through #rules and #terms-of-service in case you have problem with this community.

If your problem is still not resolved then feel free to ask on #tech-support but first of all,

Fill the following:

1. My Platform: Sc/Steam
2. My menu version:
3. My Problem in detail:
4. What I have tried to fix it:

NOTE:

* Make sure you read #solutions before asking for a common problem.
* Feel free to PM a tech support who is online (showing green dot in front of name).
* Please dont use @techsupport unless there is no response for atleast 5 minutes. We can be busy at times and this is really very annoying sometimes.
* In case your problem is still not resolved then please wait for next update. Sorry for the inconvenience.
`,
            }],
            color: 0x427fd6
        }
    });
};
exports.info = {
    name: 'welcome',
    description: 'welcome',
    usage: 'welcome'
};
