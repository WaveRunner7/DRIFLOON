const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = 'd!';


bot.on('ready', () =>{
    console.log('A WILD DRIFLOON HAS APPEARED!');
    bot.user.setActivity('d!help');
})

bot.on('message', message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");


    switch(args[0]){
        case 'go-drifloon':
            message.channel.send('DRIFLOOON!')
            break;
        case 'subscribe':
            message.channel.send('DRIF DRIF!, GO SUB TO SONICFAN7000 ON YOUTUBE PLEASE HE WOULD LOVE IT!!!https://www.youtube.com/channel/UCXn2WYhgiCMm9oW4A-Skk7w/')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('DRIFLOON!, Version 2.0.0');
            }else{
                message.channel.send('DRIF DRIF, TYPE "d!info version" instead')
            }
            break;
        case 'what-are-you':
            message.channel.send('THIS IS WHAT I AM OK! https://66.media.tumblr.com/c4f4df5d805b12ae8fc94ab18aede5af/tumblr_nt5tm2WWlp1uofksuo1_500.png')
            break;
        case 'help':
            message.channel.send('THIS IS THE COMMAND LIST d!info, d!subscribe, d!what-are-you, d!clear(this deletes messages) d!go-drifloon, d!DVD, d!i-wanna-make-my-own-discord-bot, d!upcoming-commands, d!update-log,  I HOPE THIS HELPS...')
            break;
        case 'clear':
            if(!args[1]) return message.reply('DRIFLOON!,ERROR!! DEFINE THE SECOND STATEMENT,EXAMPLE d!clear 2....TRY AGIAN')
            message.channel.bulkDelete(args[1]);
            break;
        case 'i-wanna-make-my-own-discord-bot':
            message.channel.send('This Should Get You Started https://www.youtube.com/watch?v=X_qg0Ut9nU8')
            break;
        case 'DVD':
            message.channel.send('WELL I CAN"T MAKE YOU A DVD BUT I CAN SHOW YOU A PICTURE OF ONE https://i.ebayimg.com/images/g/sP8AAOSwZVlXis-L/s-l400.jpg')
            break;
        case 'upcoming-commands':
            message.channel.send('Theese Commands Are The Ones Coming To My Bot Soon, d!say')
        case 'update-log':
            message.channel.send('Drifloon Version 2.0.0 Updates 8/27/2020 Now theres the Update Log Also The d!upcoming-commands is fixed...')
            break;
            
    }
})


bot.login(process.env.token)
