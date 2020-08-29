const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = 'd!';


client.on('ready', () =>{
    console.log('A WILD DRIFLOON HAS APPEARED!');
    client.user.setActivity('d!help');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'help'){
        message.channel.send('THIS IS THE COMMAND LIST d!version, d!what-are-you, d!go-drifloon, d!dvd, d!i-wanna-make-my-own-discord-bot, d!upcoming-commands, d!update-log,  I HOPE THIS HELPS...');
    } else if (command == 'version'){
        message.channel.send('DRIFLOON!, Version 2.5.0');
    } else if (command == 'what-are-you'){
        message.channel.send('THIS IS WHAT I AM OK! https://66.media.tumblr.com/c4f4df5d805b12ae8fc94ab18aede5af/tumblr_nt5tm2WWlp1uofksuo1_500.png');
    } else if (command == 'dvd'){
        message.channel.send('WELL I CAN"T MAKE YOU A DVD BUT I CAN SHOW YOU A PICTURE OF ONE https://i.ebayimg.com/images/g/sP8AAOSwZVlXis-L/s-l400.jpg');
    } else if (command == 'go-drifloon'){
        message.channel.send('DRIFLOOON!');
    } else if (command == 'i-wanna-make-my-own-discord-bot'){
        message.channel.send('This Should Get You Started https://www.youtube.com/watch?v=X_qg0Ut9nU8');
    } else if (command == 'upcoming-commands'){
        message.channel.send('These Commands Are The Ones Coming To This Bot Soon, d!say');
    } else if (command == 'update-log'){
        message.channel.send('Drifloon Version 2.5.0 Updates 8/27/2020 Now theres the Update Log Also The d!upcoming-commands is fixed...8/29/2020 Fixed The Prefix Bug That Made Drifloon Overlap with Other bots and also got rid of some commands');
    }
});

client.login(process.env.token);

