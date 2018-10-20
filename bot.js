const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity("?help | ?inv.",{type: 'WATCHING'})
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});


// BC --------------------------------------------------------------------------------

client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith(prefix + "bc")) {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});


// AVATAR --------------------------------------------------------------------------------

client.on('message', message => {
    if (message.content.startsWith("?avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});


// IMAGE --------------------------------------------------------------------------------


   client.on("message", message => {
    const prefix = "?"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });



// -BC [ADMINS] --------------------------------------------------------------------------------


client.on('message', message => {
var prefix = "-";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});





// SAY --------------------------------------------------------------------------------



client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// ?say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});




// APPEAL --------------------------------------------------------------------------------

client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var prefix = '?';// Alpha Codes
    var name = '';// Alpha Codes
    var age = '';// Alpha Codes
    var fromwhere = '';// Alpha Codes
    var fa2dh = '';// Alpha Codes
    var filter = m => m.author.id === message.author.id;// Alpha Codes
    var subChannel = message.guild.channels.find(c => c.name === '𝐀pplying-𝐀dmins');// Alpha Codes
   
    if(command == prefix + 'تقديم') {// Alpha Codes
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === 'Canon » Seller');// Alpha Codes
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');// Alpha Codes
        if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `𝐀pplying-𝐀dmins`');// Alpha Codes
       
        message.channel.send(':timer: | **اكتب اسمك الحقيقي الان من فضلك**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | ** أكتب عمرك الحقيقي **').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | ** لماذا تريد ان تأخذ هذه الرتبه ؟ **').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | ** ؟ (SHOP) ما هو مجالك في السوق   **').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: هل انت متأكد انك تريد التقديم؟**')
                                        .setColor('GREEN')
                                        .addField('الاسم', name, true)
                                        .addField('العمر', age, true)
                                        .addField('سبب التقديم', fromwhere, true)
                                        .addField('المجال', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم accept-reject').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('الاسم', name)
                                                .addField('العمر', age)
                                                .addField('من وين', fromwhere)
                                                .addField('لماذا يريد التقديم', fa2dh)
                                                .addField('حسابه', message.author)
                                                .addField('ايدي حسابه', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅'  && user.id === '399697177259147275'
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' && user.id === '399697177259147275'
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | تم قبولك اداري بسيرفر **${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === 'accept-reject').send(`:white_check_mark: | تم قبولك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | تم رفضك بسيرفر **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === 'accept-reject').send(`:x: | تم رفضك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                })
                                            });// Alpha Codes
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');// Alpha Codes
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});






// AUTO REPLAY --------------------------------------------------------------------------------


client.on('message', msg => {
  if (msg.content === 'السلام عليكم') {      
    msg.channel.send("وعليكـم الســلام ورحمة الله وبركاتـه")
  }
});



// ID --------------------------------------------------------------------------------

client.on('message', message => {
  var prefix = "?"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('🔱| اسمك:',`**<@` + `${z.id}` + `>**`, true)
.addField('🛡| ايدي:', "**"+ `${z.id}` +"**",true)
.addField('♨| Playing:','**'+y+'**' , true)
.addField('🤖| نوع حسابك:',"**"+ w + "**",true)    
.addField('📛| الكود حق حسابك:',"**#" +  `${z.discriminator}**`,true)
.addField('**التاريح الذي انشئ فيه حسابك | 📆 **: ' ,year + "-"+ month +"-"+ day)    
.addField("**تاريخ دخولك للسيرفر| ⌚   :**", message.member.joinedAt.toLocaleString())    

.addField('**⌚ | تاريخ انشاء حسابك الكامل:**', message.author.createdAt.toLocaleString())
.addField("**اخر رسالة لك | 💬  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
  if (!message) return message.reply('**ضع المينشان بشكل صحيح  ❌ **').catch(console.error);

}

});



 
// HELP ADMIN -------------------------------------------------------------------------------- 
 
client.on('message', message => {
    if (message.content === "?helpadmin") {
        let pages = [`**[❖═════اومر ادمن═══════❖]
        ❖ ?kick <mention > ➾  kickلي اعطاء شخص
      
        ❖ ?setvoice  لي انشاء روم فويس اونلاين
      
        ❖ ?ban <mention> ➾ لي اعطاء شخص بان
      
        ❖ ?unban <mention> ➾ لي فك بان عن شخص
      
        ❖ ?mute <mention> ➾ لـ اعطاء ميوت لي شخص
      
        ❖ ?ct <name> ➾ لـ انشاء روم كتبي
      
        ❖ ?cv <name> ➾لـ انشاء روم صوتي
      
        ❖ ?bc <message>  ➾ لـ ارسال رسالة لي كل الاعضاء

        ❖ ?mc  ➾ لـ اغلاق الشات

        ❖ ?unmc  ➾ لـ فتح الشات

        ❖ ?rolebc  ➾ برود كاست للرتب 

        ❖ ?send  ➾ ارسال رسالة لروم باسم البوت

        ❖ ?clear  ➾ لـ حذف الشات 

        **`]
        let page = 1;
    
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setFooter(`Page ${page} of ${pages.length}`)
        .setDescription(pages[page-1])
    
        message.channel.send(embed).then(msg => {
    
        msg.react('◀').then( r => {
            msg.react('▶')
                
    
                    const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
    
    
    
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
          
          page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            })
        })
        }
    });
	
// INVITE BOT --------------------------------------------------------------------------------	

client.on('message', message => {
        if (message.content.toLowerCase() === prefix + "inv") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setTitle(`:small_orange_diamond: Click Here To Invite :small_orange_diamond: `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=493764393016754178&permissions=21015380078&scope=bot`)
     message.channel.sendEmbed(embed);
       }
   });


// Invite Bot - 2 --------------------------------------------------------------------------------
   
client.on('message', message => {
        if (message.content.toLowerCase() === prefix + "invite") {
            if(!message.channel.guild) return;
        let embed = new Discord.RichEmbed()
        .setTitle(`:small_orange_diamond: Click Here To Invite :small_orange_diamond: `)
        .setURL(`https://discordapp.com/oauth2/authorize?client_id=493764393016754178&permissions=21015380078&scope=bot`)
     message.channel.sendEmbed(embed);
       }
   });


// SERVER --------------------------------------------------------------------------------

client.on('message', function(msg) {
    const prefix = '?'
    if(msg.content.startsWith (prefix  + 'serv')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
  
// Role Info --------------------------------------------------------------------------------
  
client.on('message',async message => {
  let args = message.content.split(" ").slice(1).join(" ");
  let role = message.guild.roles.find('name',args) || message.guild.roles.get(args);
 
 
  if(message.content.startsWith(prefix + "role-info")) {
    if(!args) return message.reply('اكتب اسم الرتبة');
    if(!role) return message.reply('هذه الرتبة غير موجودة');
    let iQp = new Discord.RichEmbed()
    .setAuthor(message.author.tag,message.author.avatarURL)
    .setTitle(message.guild.name)
    .setThumbnail(message.guild.iconURL)
    .addField('- اسم الرتبة',role.name,true)
    .addField('- اي دي الرتبة',role.id,true)
    .addField('- تم انشاء الرتبة',role.createdAt.toLocaleString(),true)
    .addField('- لون الرتبة',role.hexColor,true)
    .addField('- عدد الاعضاء الذي لديهم نفس الرتبة',role.members.size,true)
    .addField('- مركز الرتبة بين كل الرتب',role.position,true)
    .addField('- خصائص الرتبة',role.permissions,true)
    .setFooter(message.author.tag,message.author.avatarURL);
 
    message.channel.send(iQp);
  }
});


// HELP  --------------------------------------------------------------------------------

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { 
    let pages = [`
***__وصف عن البوت__***
**
:gem:  البوت فيه كثير ميزات حلوة و جميلة
 ا:rocket: البوت يعمل قرابة 24 ساعة
**
        ***__General orders__***
**
『?serv /يعرض لك معلومات عن السيرفر』
『?serv2 / يعرض لك معلومات عن السيرفر ( الكود الثاني ) للمعلومات』
『?id / يعرض لك معلومات عنك』
『?myroles / لرؤية جميع رتبك الشخصية بالسيرفر』
『?helpadmin / مساعدة الادمن』
『?id / يعرض لك معلومات عنك』
『?link / لمعمل انفايت ( دعوة ) لشخص』
『?inv / لدعوة البوت الى سيرفرك』
『?support / سيرفر المساعدة』
『?cmind / لكتابة اي شيء تقوله داخل صورة』
『?servavatar / لرؤية صورة السيرفر』
『?count / لرؤية عدد الاعضاء بالسيرفر』
『?avatar / لرؤية صورة شخص 』
『?bot-info / لرؤية معلومات عن البوت 』
『?report / لرفع شكوى على عضو 』
『?servers / لرؤية عدد السيرفرات التي داخل بها البوت 』
『?myid / لمعرفة الايدي الخاص بك 』

**
   
`]
    let page = 1;
 
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])
 
    message.author.sendEmbed(embed).then(msg => {
 
        msg.react('◀').then( r => {
            msg.react('▶')
 
 
        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;
 
 
        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});
 
 
 
        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
     
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});


// Help done --------------------------------------------------------------------------------

client.on('message', message => {
    if(message.content === '?help') {
        message.reply('تم ارساله بالخاص :white_check_mark: ');
    }
});


// Support --------------------------------------------------------------------------------

client.on('message', message => {
    if(message.content === '?support') {
        message.channel.send('Soon !');
    }
});


// Kick --------------------------------------------------------------------------------

client.on('message', message => {
const prefix = "?";
  if (message.author.kick) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
 
  if (message.mentions.users.size < 1) return message.reply("منشن شخص");
  if(!reason) return message.reply ("اكتب سبب الطرد");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");
 
  message.guild.member(user).kick(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("492583022982463500").send({embed : banembed})
}
});


// UnBan --------------------------------------------------------------------------------

client.on('message' , message => {
    var prefix = "?";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});


// BAN --------------------------------------------------------------------------------

var prefix = "?"
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
 
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");
 
  message.guild.member(user).ban(7, user);
 
  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


// Mute Chat --------------------------------------------------------------------------------

client.on('message', message => {

    if (message.content === "?mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "?unmc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});


// NSHR --------------------------------------------------------------------------------

client.on('message', msg => {
  if (msg.content === 'discord.gg') {
   msg.delete(30)
    msg.reply('ممنوع النشر !!');
  }
});



// Create VOice --------------------------------------------------------------------------------

client.on("message", (message) => {
if (message.content.startsWith("?cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});


// Create Text --------------------------------------------------------------------------------

client.on("message", (message) => {
if (message.content.startsWith("?ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});


// COUNT --------------------------------------------------------------------------------

client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='?count')
      var SaifDz = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL)
      .setTitle('🌷| Members info')
      .addBlankField(true)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(SaifDz);
    });
	
	
// Server AVATAR --------------------------------------------------------------------------------	
	
client.on("message", message => {
    const prefix = "?"
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "servavatar"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  
// Mute --------------------------------------------------------------------------------  
  
client.on('message', message => {
    let log = message.client.channels.find('id', '503095766156443659')
    let reason = message.content.split(" ").slice(2).join(' ');
    let p = message.mentions.members.first();
    if (message.author.bot) return;
    if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + "mute")){
        
        if (!message.member.roles.find('name', 'اسم الرتبة الي لها صلاحية الميوت')) return message.reply('**هذا الأمر مخصص للادارة فقط !**').then(message => message.delete(3000));
        if(!p) return message.reply(`**ضع منشن للشخص المراد اسكاته**`).then(message => message.delete(3000));
        if(reason.length < 1) return message.reply(`**ضع صورة تثبت صحة الاسكات**`).then(message => message.delete(3000));
        if(!reason.includes("prntscr")) return message.reply(`**يجب ان يكون السبب صورة**`).then(message => message.delete(3000));
        if(p.roles.find('name', 'Muted')) return message.reply('**تم اسكات هذا العضو بالفعل**').then(message => message.delete(3000));
            
        p.addRole(message.guild.roles.find("name", "Muted")).then (message.reply('**Done.**'));
        
        let embed = new Discord.RichEmbed()
        .setTitle(`New Mute!`)
        .addField(`For`, `<@${p.user.id}>`)
        .addField(`By`, `<@${message.author.id}>`)
        .addField(`Reason`, reason)
        .addField(`In Chat`, `<#${message.channel.id}>`)
        .setColor("#161414")
        .setTimestamp()
        .setFooter(" ")
        
        message.delete();
        
        log.send({embed})
    }
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
.addField("User", user, true)  
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});


// Link --------------------------------------------------------------------------------

 client.on('message', message => {
    if (message.content.startsWith("?link")) {
        message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 3600,
    }).then(invite =>
      message.channel.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setDescription("تم ارسال الرابط ")
           .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('طلب بواسطة: ' + message.author.tag)

      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
        
    .setDescription("** مدة الرابط : ساعه | عدد استخدامات الرابط : 100 **")
      message.channel.sendEmbed(Embed11)
    }
});


// BOT USERS --------------------------------------------------------------------------------

client.on('message',async msg => {
  var p = "?";
  if(msg.content.startsWith(p + "user")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`يتم تحضير الروم :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Bot Users : ◤ → ${client.users.size} ← ◢`);
 },1000);
  });
  }
 
});


// Welcome --------------------------------------------------------------------------------

    client.on('guildMemberAdd', member => {
        let channel = member.guild.channels.find('name', 'welcome');
        let memberavatar = member.user.avatarURL
          if (!channel) return;
        let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setThumbnail(memberavatar)
            .addField('🎽 | name :  ',`${member}`)
            .addField('📢 | نورت السيرفر يا قلبي' , `Welcome to the server, ${member}`)
            .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                    .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
                   
                      .addField("Name:",`<@` + `${member.id}` + `>`, true)
                         
                                         .addField(' الـسيرفر', `${member.guild.name}`,true)
                                           
         .setFooter(`${member.guild.name}`)
            .setTimestamp()
       
          channel.sendEmbed(embed);
        });
        
        client.on('guildMemberRemove', member => {
            var embed = new Discord.RichEmbed()
            .setAuthor(member.user.username, member.user.avatarURL)
            .setThumbnail(member.user.avatarURL)
            .setTitle(`الله معاك ✋:skin-tone-1: 😔`)
            .setDescription(`مع السلامه تشرفنا بك ✋:skin-tone-1: 😔 `)
            .addField('👤   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
            .setColor('RED')
            .setFooter(`==== نــتــمــنــآ لــكــم آســتــمـــتــآع ====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
        
        var channel =member.guild.channels.find('name', 'welcome')
        if (!channel) return;
        channel.send({embed : embed});
        })



client.on('message', message => {/// الفا كود | Emoko#0001
     if (message.content === "?servers") {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM") /// الفا كود | Emoko#0001
  .addField("**سيرفرات يلي البوت موجود فيها: **" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }/// الفا كود | Emoko#0001
});
client.on('message' , message => {
  var prefix = "?";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });
 
 
// Report -------------------------------------------------------------------------------- 
 
client.on("message", message => {
        let args = message.content.split(" ").slice(1);
      if (message.content.startsWith(prefix + 'report')) {
            let user = message.mentions.users.first();
            let reason = args.slice(1).join(' ');
            let modlog = client.channels.find('name', 'reports');
            if (!reason) return message.reply('**ضع سبباً مقنعاً**');
              if (message.mentions.users.size < 1) return message.reply('**يجب عليك منشن للعضو المراد الابلاغ عليه**').catch(console.error);
       
        if (!modlog) return message.reply('**لا يوجد روم بأسم report**');
        const embed = new Discord.RichEmbed()
          .setColor(0x00AE86)
          .setTimestamp()
          .addField('نوع الرسالة:', 'Report')
          .addField('المراد الابلاغ عليه:', `${user.username}#${user.discriminator} (${user.id}`)
          .addField('صاحب الابلاغ:', `${message.author.username}#${message.author.discriminator}`)
          .addField('السبب', reason);
          message.delete()
          return client.channels.get(modlog.id).sendEmbed(embed).catch(console.error);
          console.log('[report] Send By: ' + message.author.username)
      }
      });
	  
	  
// My ID --------------------------------------------------------------------------------	  
	  
client.on('message', async message =>{

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let sicon = message.author.displayAvatarURL;
  if(cmd === `?myid`) {
      var bots = new Discord.RichEmbed()

      .setDescription(`** Your id: ${message.author.id}  **`)
      .setColor('RANDOM')
      message.channel.send(bots);
  }
});


// Bot Added --------------------------------------------------------------------------------	 

client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكراً لك لإضافه البوت الى سيرفرك**`)
      guild.owner.send(embed)
});


// BC ALL --------------------------------------------------------------------------------

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('?bcall')){
 if (message.author.id !== '399697177259147275') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
message.channel.sendMessage('جار ارسال الرسالة |✅')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


// Clear --------------------------------------------------------------------------------

client.on('message', message => {
	var prefix = "?";
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**This Command is Just For Servers**').then(m => m.delete(5000));
if(!message.member.hasPermission('MANAGE_MESSAGES')) return      message.channel.send('**You Do not have permission** `MANAGE_MESSAGES`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**Are You sure you want to clear the chat?**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`Chat will delete`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` Chat Deleted ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**Chat deletion cancelled**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});


// BOT Informations --------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === (prefix + "bot")) {
         if(!message.channel.guild) return;
     let embed = new Discord.RichEmbed()
  .setColor("#8650a7")
  .addField("** ✅ Servers: **" , client.guilds.size)
  .addField("** ✅ Users: **" , client.users.size)
  .addField("** ✅ Channels: **" , client.channels.size)
    .addField("** 🚀 Ping **" , Date.now() - message.createdTimestamp)
    .setTimestamp()
  message.channel.sendEmbed(embed);
    }
});


// SET STATS --------------------------------------------------------------------------------

client.on('message',async msg => {
     if(msg.channel.type === "dm") return;
  if(msg.author.bot) return;
  var p = "?";
  if(msg.content.startsWith(p + "setstats")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **go play minecraft**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  var ggg= msg.guild.createChannel('SERVER STATS', 'category').then(kk => {
           var ccc =msg.guild.createChannel('SERVER STATS', 'voice').then(al => {
                var aa =msg.guild.createChannel('SERVER STATS', 'voice').then(alp => {
                   var aaa =msg.guild.createChannel('SERVER STATS', 'voice').then(alph => {
       al.setParent(kk);
       alp.setParent(kk);
       alph.setParent(kk);
       
     al.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alp.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
     alph.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
Seconds = currentTime.getSeconds(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
     al.setName(`Voice Online :[ ${msg.guild.members.filter(m => m.voiceChannel).size} ]`);
      alp.setName(`Time :[${hours} : ${minutes} : ${Seconds} ${suffix}]`);
        alph.setName(`[ Date : [${Year} - ${Month} - ${Dat} ]`);
 },1000);
                   })
    
                })
           })
  })
           
  }
 
});



// AUTO ROLES --------------------------------------------------------------------------------

client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "𝙁𝙞𝙧𝙚𝙭-𝙂𝙪𝙚𝙨𝙩");
   member.addRole (role);
  
})



client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Member");
   member.addRole (role);
  
})



client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "Canon » Member");
   member.addRole (role);
  
})



client.on ("guildMemberAdd", member => {
  
   var role = member.guild.roles.find ("name", "member");
   member.addRole (role);
  
})

//---------------------------------------------------------------------------------------------------------------------


// LOG --------------------------------------------------------------------------------

const fs = require("fs")

client.on('ready', () => {
    console.log('-------------------------')
    console.log(`✨ Name: ${client.user.username}`)
    console.log('-------------------------')
    console.log(`✨ Id: ${client.user.id}`)
    console.log('-------------------------')
    console.log(`✨ Prefix: ${prefix}`)
    console.log('-------------------------')
    console.log(`✨ Servers: ${client.guilds.size}`)
    console.log('-------------------------')
    console.log(`✨ Members: ${client.users.size}`)
    console.log('-------------------------')
    console.log(`✨ Channels: ${client.channels.size}`)
    console.log('-------------------------')
  })
  
client.on('message', msg => {
    if(msg.content === 'bic') {
        msg.reply('Hi')
    }
})

let lg = JSON.parse(fs.readFileSync('./log.json', 'utf8'))

client.on('message', message => {
    
    let newlog = message.content.split(" ").slice(1).join(" ")
    if(!lg[message.guild.id]) lg[message.guild.id] = {
        ch: "log"
    }
    let lgy = lg[message.guild.id].ch;
    if(message.content.startsWith(prefix + 'setlog')) {
        if(!newlog) return message.reply(`${prefix}setlog [Channel name]`)
     if(!message.guild.channels.find(`name`,newlog)) return message.reply(`I Cant Find This Channel.`)
        lg[message.guild.id].ch = newlog
        message.channel.send('**Log Channel has been changed to `' + newlog + '`.**')
    }
    fs.writeFile("./log.json", JSON.stringify(lg), (err) => {
        if (err) console.error(err)
      });

if(message.content === prefix + 'setlog info') {
    message.channel.send(`**Log!**
    **Channel**:${lgy}`)
}

client.on("roleDelete",  rd => {
    const channel = rd.guild.channels.find("name", lgy)
    if(channel) {
      var embed = new Discord.RichEmbed()
      .setTitle(` - Role Delete`)
      .setDescription(`A role has been deleted \n Name : ${rd.name}`)
      .setColor(`#34495E`)
         .setTimestamp();
    channel.sendEmbed(embed)
    }
    });        

    client.on("roleCreate",  rc => {
        const channel = rc.guild.channels.find("name", lgy)
        if(channel) {
          var embed = new Discord.RichEmbed()
          .setTitle(` - Role Create`)
          .setDescription(`A role Has been created \n Name : ${rc.name}`)
          .setColor(`#34495E`)
             .setTimestamp();
        channel.sendEmbed(embed)
        }
        });
        client.on('messageUpdate', (message, newMessage) => {
            if (message.content === newMessage.content) return;
            if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
            const channel = message.guild.channels.find('name', lgy);
            if (!channel) return;
          
            let embed = new Discord.RichEmbed()
               .setAuthor(`${message.author.tag}`, message.author.avatarURL)
               .setColor('#34495E')
               .setDescription(`✏ **Message sent by <@${message.author.id}> edited in** <#${message.channel.id}>\n\nOld:\n \${message.cleanContent}\n\nNew:\n ${newMessage.cleanContent}`)
               .setTimestamp();
             channel.send({embed:embed});
          });

          client.on('messageDelete', message => {
            if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
            const channel = message.guild.channels.find('name', lgy);
            if (!channel) return;
          
            let embed = new Discord.RichEmbed()
               .setAuthor(`${message.author.tag}`, message.author.avatarURL)
               .setColor('#34495E')
               .setDescription(`🗑️ **Message sent by <@${message.author.id}> deleted in** <#${message.channel.id}>\n\n \${message.cleanContent}`)
               .setTimestamp();
             channel.send({embed:embed});
          
          });

          client.on('guildMemberRemove', member => {
            if (!member || !member.id || !member.guild) return;
            const guild = member.guild;
          
            const channel = member.guild.channels.find('name', lgy);
            if (!channel) return;
            let memberavatar = member.user.avatarURL
            const fromNow = moment(member.joinedTimestamp).fromNow();
            
            let embed = new Discord.RichEmbed()
               .setAuthor(`${member.user.tag}`, member.user.avatarURL)
             .setThumbnail(memberavatar)
               .setColor('#34495E')
               .setDescription(`:outbox_tray: <@${member.user.id}> left the server\n\n Had joined: \n ${fromNow}`)
               .setTimestamp();
             channel.send({embed:embed});
          });
          // لوق دخول اللاعبين
          client.on('guildMemberAdd', member => {
            if (!member || !member.id || !member.guild) return;
            const guild = member.guild;
          
            const channel = member.guild.channels.find('name', lgy);
            if (!channel) return;
            let memberavatar = member.user.avatarURL
            const fromNow = moment(member.user.createdTimestamp).fromNow();
            const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
            
            let embed = new Discord.RichEmbed()
               .setAuthor(`${member.user.tag}`, member.user.avatarURL)
             .setThumbnail(memberavatar)
               .setColor('#34495E')
               .setDescription(`:inbox_tray: <@${member.user.id}> Joined the server\n\n Created: \n ${fromNow} ${isNew}`)
               .setTimestamp();
             channel.send({embed:embed});
          });

})



// MAINTENANCE --------------------------------------------------------------------------------



client.on("message", message => {
        if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + "maintenance")) {
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
        let mutedc = message.guild.roles.find(n => n.name === 'Muted');
            message.guild.channels.forEach(codes => {
                codes.overwritePermissions(message.guild.id, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: false
                });
                codes.overwritePermissions(mutedc.id, {
                    READ_MESSAGES: false
                });                         
            });
    }
});



// MAINTENANCE --------------------------------------------------------------------------------



client.on('message', message => {
  if(message.content.startsWith("#credit <@399697177259147275>","#credits <@399697177259147275>")) {
    let role = message.guild.roles.find("name", "Canon » Donatour");
    if(!role) {
      return message.channel.send('Thanks for your support. ❤');
    }
      message.member.addRole(role);
      let embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Thanks for you support you have given the Donatour role.");

        message.author.sendEmbed(embed);
  }
});


// Server list --------------------------------------------------------------------------------


client.on('message', message => {
  if(message.author.bot) return;
    if(message.content === prefix + 'gm') {
      var sg = client.guilds.filter(o => o.memberCount > 100).map(e => e.name).join('\n')
      var gl = client.guilds.filter(g => g.memberCount < 100).map(n => n.name).join('\n')
      var gm = new Discord.RichEmbed()
      .setDescription('- قائمة اعضاء السيرفرات')
      .setColor('RANDOM')
      .addField('- قائمة السيرفرات التي تملك فوق المئة عضو', sg || "0")
      .addField('- قائمة السيرفرات التي تملك اقل من مئة عضو', gl || "0")
      .setFooter(Guilds: ${client.guilds.size}, Users: ${client.users.size}, Channels: ${client.channels.size}.)
      message.channel.send(gm);
    }
});


// AUTO ROLE --------------------------------------------------------------------------------

if(!Discord) var Discord = require('discord.js');
if(!client) var client = new Discord.Client();
if(!prefix) var prefix = "?" ; // البرفكس 

var stopReacord = true;
var reactionRoles = [];
var definedReactionRole = null;

client.on("message", async message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;
    if (command == "autoc") {
      if(!message.channel.guild) return message.reply(`**this ~~command~~ __for servers only__**`);
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("sorry you can't do this");
      if(!args[0] || args[1]) return message.channel.send(`\`\`\`${prefix}autoC <role-name>\`\`\``);
      var role = message.guild.roles.find( role => { return role.name == args[0] });
      if(!role) return message.channel.send(`no role with name ${definedRoleName} found, make sure you entered correct name`);
      if(definedReactionRole != null  || !stopReacord) return message.channel.send("another reaction role request is running");
      message.channel.send(`now go and add reaction in the message you want for role ${role.name}`);
      definedReactionRole = role;
      stopReacord = false;
    }     
})
client.on('raw', raw => {
  if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(raw.t)) return;
  var channel = client.channels.get(raw.d.channel_id);
  if (channel.messages.has(raw.d.message_id)) return;
  channel.fetchMessage(raw.d.message_id).then(message => {
    var reaction = message.reactions.get( (raw.d.emoji.id ? `${raw.d.emoji.name}:${raw.d.emoji.id}` : raw.d.emoji.name) );
    if (raw.t === 'MESSAGE_REACTION_ADD') return client.emit('messageReactionAdd', reaction, client.users.get(raw.d.user_id));
    if (raw.t === 'MESSAGE_REACTION_REMOVE') return client.emit('messageReactionRemove', reaction, client.users.get(raw.d.user_id));
  });
});
client.on('messageReactionAdd', (reaction, user) => {
    if(user.id == client.user.id) return;
    if(!stopReacord) {
      var done = false;
      reactionRoles[reaction.message.id] = { role: definedReactionRole, message_id: reaction.message.id, emoji: reaction.emoji};
      stopReacord =  true;
      definedReactionRole = null;
      reaction.message.react(reaction.emoji.name)
      .catch(err => {done = true; reaction.message.channel.send(`sorry i can't use this emoji but the reaction role done! anyone react will get the role!`)})
      if(done) reaction.remove(user); 
    } else {
      var request = reactionRoles[reaction.message.id];
      if(!request) return;
      if(request.emoji.name != reaction.emoji.name) return reaction.remove(user);
      reaction.message.guild.members.get(user.id).addRole(request.role);
    }
}) 
client.on('messageReactionRemove', (reaction, user) => {
  if(user.id == client.user.id) return;
  if(!stopReacord) return;
  let request = reactionRoles[reaction.message.id];
  if(!request) return;
  reaction.message.guild.members.get(user.id).removeRole(request.role);
});


// WARN --------------------------------------------------------------------------------

client.on('message', message => {
    let log = message.guild.channels.find('name', 'log');
    let reason = message.content.split(" ").slice(2).join(' ');
    let p = message.mentions.members.first();
    if(message.content.startsWith(prefix + "warn")){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`**❌ | This Command is Just for Adminstration**`);
            message.delete();
        if(!p) return message.reply(`Mention a User!`);
        if(reason.length < 1) return message.reply(`Set a reason!`)
        var embed = new Discord.RichEmbed()
        .setTitle(`New Warning!`)
        .addField(`For`, `<@${p.user.id}>`)
        .addField(`By`, `<@${message.author.id}>`)
        .addField(`Reason`, reason)
        .addField(`In Chat`, `<#${message.channel.id}>`)
        .setColor("WHITE")
        .setTimestamp()
        .setFooter(" ")
            message.channel.send(`${p} ` + reason)
            message.delete();
        log.send({embed})
    }
});




// Auto bot Replay  --------------------------------------------------------------------------------


client.on('ebnklb',function(ebnklb) {
    
    if(ebnklb.content.startsWith("<@493764393016754178>")) {
        ebnklb.channel.send('Hey Im **Canon Bot !**  A Nice Bot Developed By:`itzZa1D ™#8866`')
        ebnklb.channel.send('My Prefix `?`')

    }
});



// Active --------------------------------------------------------------------------------

const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = '?';

client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'not active'));
});


client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'active')) {
        let modlog = client.channels.find('name', 'activate');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {
        
        
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     

       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                        
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Canon » Member"));
                                   message.member.removeRole(message.guild.roles.find("name", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));
     
                                   })
                                   })
                                   }
                                   });



// Change Playing + Name --------------------------------------------------------------------------------

const adminprefix = "?";
const devs = ['399697177259147275' , ' ' , ' '];
Codes.on('message', message => {//for dev
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;

if (message.content.startsWith(adminprefix + 'setgame')) {
  Codes.user.setGame(argresult);   message.channel.sendMessage(`**${argresult} تم تغيير بلاينق البوت إلى **`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
Codes.user.setUsername(argresult).then
    message.channel.sendMessage(`**${argresult}** : تم تغيير أسم البوت إلى`)
return message.reply("**لا يمكنك تغيير الاسم يجب عليك الانتظآر لمدة ساعتين . **");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
Codes.user.setAvatar(argresult);
  message.channel.sendMessage(`**${argresult}** : تم تغير صورة البوت`);
      } else
if (message.content.startsWith(adminprefix + 'setT')) {
  Rocket.user.setGame(argresult, "https://www.twitch.tv/ImD3s_x");
    message.channel.sendMessage(`**تم تغيير تويتش البوت إلى  ${argresult}**`)
}

Codes.on('message', message => {//restart
    if(message.content === adminprefix + "restart") {
          if (!devs.includes(message.author.id)) return;
              message.channel.send(`⚠️ **الشخص الذي اعاد تشغيل البوت ${message.author.username}**`);
            console.log(`⚠️ جاري اعادة تشغيل البوت... ⚠️`);
            Rocket.destroy();
            child_process.fork(__dirname + "/bot.js");
            console.log(`تم اعادة تشغيل البوت`);
        }


    });
});




// TOKEN --------------------------------------------------------------------------------



client.login(process.env.BOT_TOKEN);
