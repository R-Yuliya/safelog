const Discord = require('discord.js');
const client = new Discord.Client();
const user_client = new Discord.Client();
let ops = {
    token: '', // Вставьте здесь токен бота
    c_id: '', // Вставьте здесь ID канала для логов
    user_token: "" // Вставьте здесь токен пользователя
}

const embed = new Discord.RichEmbed();

function log() {
    client.channels.get(`${ops.c_id}`).send(embed);
}

user_client.on('ready', () => {
    console.log('Зашёл на аккаунт юзера')
})

client.on("ready", () => {
    console.log('Зашёл на аккаунт бота')
})

user_client.on('messageDelete', async(message) => {
    if(message.author.bot) return;

    let attachments = message.attachments.array();
    
    embed.setTitle('Сообщение удалено | ' + message.guild.name + ' | ' + message.author.id);
    embed.setDescription(message.content || attachments[0].proxyURL);
    embed.setColor('#4169E1');
    embed.setTimestamp();
    embed.setThumbnail(message.author.displayAvatarURL);

    log();
    
})

user_client.on('messageUpdate', async(oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;
    if(oldMessage == newMessage) return;

    embed.setTitle('Сообщение обновлено | ' + message.guild.name + ' | ' + message.author.id);
    embed.setDescription(`Старое сообщение:\n${oldMessage.content}\nНовое сообщение:\n${newMessage.content}`);
    embed.setColor('#7B68EE');
    embed.setTimestamp();
    embed.setThumbnail(oldMessage.author.displayAvatarURL);

    log();
})

client.login(ops.token);
user_client.login(ops.user_token);

console.log(`
                            ▄╗▄                        ╓▓▀▀▄
                           ▓Ñ█▓█▓                     #▀∩▄▓╬▓▄
                          █Ñ▓█████▄                  ▐▌∩█▀└█∩╙█
                         ╓▌║██∩└▀███                ╓▀∩║▌∩∩╙█∩╙█
                         ╫▌██▌∩∩∩╙███▄              █∩∩█M∩∩:║▌∩╙█
                         █▓██▌∩∩∩∩└██▀▄ ╓▄▄▄æ▄▄æ▄▄,║▌∩∩║▌::∩└█▄▄║▌
                         ▀▒█▄∩∩∩╓╔▄█▓██████▀∩∩∩∩∩│ÑÑ∩∩∩▐█▄╓┌∩▀▒█▀█,
                         ║█▀Ñ▄▄▄║█▓████▓██∩∩∩∩∩∩∩∩∩╙Ñ╓▄∩∩∩╙▀▓▒█▀▌║▌
                         ▐███▀▒▓███████▓▓Ñ  │∩∩∩∩∩"  └▀▓▄│∩∩  ╙█▒╫▌▄
                         .█▀Ñ│N║█Ñ▄▄▄▄▒█▌   ╓∩#▒∩∩∩,  ┌o║▓▄╓╓  ┌▀██▒█▄▄██
                        #▀║▓▓▓██████▓███∩,.∩∩∩╢██▒░∩∩∩▐█▄∩█▌∩∩∩∩∩╙████████
                       █Ñ▒████████▓███▓█∩∩∩∩∩∩╙███▀▓▒░∩╙██▓█∩∩∩∩║▌╙████▀▀└
                      █Ñ▓███████▓███▀Ñ██∩∩∩╫M∩│║█╙▀▀▀▀▓███▒█▌∩∩∩█▀▌██▒╙█,
                      █▓██████████▀▀▀▀▀╙█▄∩⌠█▄∩╙██▀▀▀▀█▌ÑÑ█▒▒∩╓█▀║██▒▓M⌠▀▓
                      █████████▀▀▀▀▀▀▀▀\`╙▀▓▄▄██▓▓███████▒▓█▒▒▒█Ñ∩╫█▒▒█M∩∩╫▌,
               ,,,,,▄▄██████▓█▌▀▀█▀╙███▀   '╙╙▀└└└▀▄. └▀▀▀█▒▀▒Ñ∩∩╫█████▄████▀╗▄▄#▓▌
               ▀█▓▓███████║███▌   ▀▓╫█\`            ┌╜▀╓#╗▄▀▌Ñ∩∩∩∩╫█████████▌∩∩│▄▓╜
                ╙█████████╚██▌ \`∩└"                   ⌠█▒▓██M∩∩∩╫█████▀█████▓▀▀' ┌▄
              4▓▓▓▀▀▀█████∩██▌                 .,      └█▓█▒M∩∩╓██▒▒██▒▒▒█▓▒╠▀▀▀██╜
               └▀▀▓███████M█▓█▓▄,        ▀R▀▀▀▀▀.     .▄▓██▒∩∩╓███▒█▒▒▒█▓██▓▓▓█▀└
                   ██▀▒███▌║███████▓▄▄▄,          .▄#▀╙╙▀▀█▒∩╓█████████████▓▒▓╙
                     ╙▀▀▀▀█Ñ██▀▀└      └╙▀▀¥Φææ#▀╙└       █▒▒▀  ╙██████████▌
                          └▌▓▌                           ▐██=    ╙████▒╢█▄
`+ `\n Made by Zef for all <3 | Shitcode, but it works!`)
