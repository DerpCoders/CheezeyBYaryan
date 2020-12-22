const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')
});

client.login("Your-token-goes-here");
{

	}

client.on('message', message => {
	if (message.content === '$ping') {  
	  message.channel.send(`*Here is your Ping!🏓*
	**${Date.now() - message.createdTimestamp}ms.**`);
	}
  });

  client.on('message', message => {
	if(message.content.toLowerCase() === '$elloo' || message.content.toLowerCase() === 'ello') {
	  message.channel.send(`yo`);
	}
  });


  client.on('message', message => {
	if (message.content === 'Eat_invite') {  
	  message.channel.send(`Here Is my invite code,we Will have literall Fun there saying "Bruh"................Imagine!https://discord.com/api/oauth2/authorize?client_id=785878440909602876&permissions=3146496&scope=bot`);
	}
  });

  client.users.cache.filter(user => !user.bot).size

  client.on('ready', async () => {
    //This will get the amount of servers and then return it.
    const servers = await client.guilds.cache.size
    const users = await client.users.cache.size
    
    console.log(`Bot is now online and serving in ${servers} servers`)
    //This will display "Playing in <servers> servers!"
	client.user.setActivity(`📶 ${servers} servers and serving ${users}
	$commands for help`, {
        type: 'WATCHING',
    })
})
	

	  client.on('message', message => {
		if (message.content.toLowerCase() === '$lol') {  
		  message.channel.send(`xD`);
		}
	});


	const { executionAsyncResource } = require('async_hooks');
	const ytdl = require('ytdl-core');
	 
	const { YTSearcher } = require('ytsearcher');
	 
	const searcher = new YTSearcher({
		key: "AIzaSyB9AjiW8C0kwRdZQkoiiyfv4X-pupGYEm0",
		revealed: true
	});
	 
	const queue = new Map();
	 
	client.on("ready", () => {
		console.log("I am online!")
	})
	 
	client.on("message", async(message) => {
		const prefix = '$';
		const args = message.content.slice(prefix.length).trim().split(/ +/g)
		const command = args.shift().toLowerCase();
	 
		const serverQueue = queue.get(message.guild.id);
	 
	 
		switch(command){
			case 'play':
				execute(message, serverQueue);
				break;
			case 'stop':
				stop(message, serverQueue);
				break;
			case 'skip':
				skip(message, serverQueue);
				break;
		}
	 
		async function execute(message, serverQueue){
			let vc = message.member.voice.channel;
			if(!vc){
				return message.channel.send("Join the voice chat First!");
			}else{
				let result = await searcher.search(args.join(" "), { type: "audio" })
				const songInfo = await ytdl.getInfo(result.first.url)
	 
				let song = {
					title: songInfo.videoDetails.title,
					url: songInfo.videoDetails.video_url
				};
	 
				if(!serverQueue){
					const queueConstructor = {
						txtChannel: message.channel,
						vChannel: vc,
						connection: null,
						songs: [],
						volume: 10,
						playing: true
					};
					queue.set(message.guild.id, queueConstructor);
	 
					queueConstructor.songs.push(song);
	 
					try{
						let connection = await vc.join();
						queueConstructor.connection = connection;
						play(message.guild, queueConstructor.songs[0]);
					}catch (err){
						console.error(err);
						queue.delete(message.guild.id);
						return message.channel.send(`Unable to join the voice chat ${err}`)
					}
				}else{
					serverQueue.songs.push(song);
					return message.channel.send(`Your Song has been added😎
					Added by ${message.author.tag} ${song.title}`);
				}
			}
		}
		function play(guild, song){
			const serverQueue = queue.get(guild.id);
			if(!song){
				serverQueue.vChannel.leave();
				queue.delete(guild.id);
				return;
			}
			const dispatcher = serverQueue.connection
				.play(ytdl(song.url))
				.on('finish', () =>{
					serverQueue.songs.shift();
					play(guild, serverQueue.songs[0]);
				})
				serverQueue.txtChannel.send(`이제이 노래를 재생(in english:-Now playing this song) .............. Added by ${message.author.tag} ${song.title}[0]}`)
		}
		function stop (message, serverQueue){
			if(!message.member.voice.channel)
				return message.channel.send("join voice chat!")
				message.member.voice.channel.leave && message.channel.send('Stopped!');
			serverQueue.songs = [];
			serverQueue.connection.dispatcher.end();
		}
		function skip (message, serverQueue){
			if(!message.member.voice.channel)
				return message.channel.send("please join voice chat");
			if(!serverQueue)
				return message.channel.send("Ur a bot ,There is nothing to skip");
			serverQueue.connection.dispatcher.end();
		}
	})
	 
	client.login("Nzg1ODc4NDQwOTA5NjAyODc2.X8-QVQ.ypR1acHlLKLwdl64eHCaQJ0nC_Y")

	client.on('message', message => {
		if (message.content.toLowerCase() === '$imagine') {  
		  message.channel.send(`xD
		  **Imagination is the key to success!
		  Imagine and you will succeed!
		  Imagine!**`);
		}
	});

	client.on('message', message => {
		if (message.content.toLowerCase() === 'FUCK') {  
		  message.channel.send(`HEY! THATS A BAD WORD`);
		}
	});

	client.on('message', message => {
		if (message.content.toLowerCase() === 'Sex') {  
		  message.channel.send(`HEY! THATS A BAD WORD`);
		}
	});

	client.on('message', message => {
		if (message.content.toLowerCase() === 'ass') {  
		  message.channel.send(`HEY! THATS A BAD WORD`);
		}
	});

	client.on('message', message => {
		if (message.content.toLowerCase() === 'asshole') {  
		  message.channel.send(`HEY! THATS A BAD WORD`);
		}
	});

	client.on('message', message => {
		if (message.content.toLowerCase() === 'WHAT THE FUCK') {  
		  message.channel.send(`HEY! THATS A BAD WORD`);
		}
	});

	client.on('message', message => {
		if (message.content.toLowerCase() === 'Dictator') {  
		  message.channel.send(`HEY! THATS A BAD WORD`);
		}
	});

	client.on('message', message => {
		if (message.content.toLowerCase() === 'wtf') {  
		  message.channel.send(`HEY! THATS A BAD WORD`);
		}
	});

	client.on('message', message => {
		if (message.content.toLowerCase() === '$server is online') {  
		  message.channel.send(`Lets Play on ShadowHypr.aternos.me!`);
		}
	});
	
	

		client.on('message', message => {
			if (message.content.toLowerCase() === '$web') {  
			  message.channel.send(`"https://shadowcodes101.github.io/youtube.github.io/"`);
			}
		});

		client.on('message', message => {
			if (message.content.toLowerCase() === '$thicc') {  
			  message.channel.send(`Yo MAMA OBAMA!`);
			}
		});
		
		client.on('message', message => {
			if (message.content.toLowerCase() === '$bts_members') {  
			  message.channel.send(``);
			}
		});

		client.on('message', message => {
			if (message.content.toLowerCase() === 'Bruh'|| message.content.toLowerCase() === 'Breh' || message.content.toLowerCase() === 'Brah'|| message.content.toLowerCase() === 'breh') {  
			  message.channel.send(`😑`);
			}
		});

		client.on('message', message => {
			if(message.content.toLowerCase() === 'elloo' || message.content.toLowerCase() === 'ello') {
			  message.channel.send(`wat yo doing`);
			}
		  });





		  client.on('message', message => {
			if(message.content.toLowerCase() === '$commands') {
			  message.channel.send(`Eat_invite - For invite
			  $ping - For knowing the ping of your bot
			  $play - for playing Music
			  $stop - for stopping the music
			  $skip - for Skipping the current track
			  $imagine - ||Thats a secret try it out||`);
			}
		  });




		  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('invite link')
	.setURL('https://discord.com/api/oauth2/authorize?client_id=785878440909602876&permissions=3146496&scope=bot')
	.setAuthor('Some name', 'https://vignette.wikia.nocookie.net/rainbow-jay-land/images/5/5f/Cheesed.png/revision/latest?cb=20150729172535', 'https://discord.js.org')
	.setDescription('This is my invite link!')
	.setThumbnail('https://vignette.wikia.nocookie.net/rainbow-jay-land/images/5/5f/Cheesed.png/revision/latest?cb=20150729172535')
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://vignette.wikia.nocookie.net/rainbow-jay-land/images/5/5f/Cheesed.png/revision/latest?cb=20150729172535')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://vignette.wikia.nocookie.net/rainbow-jay-land/images/5/5f/Cheesed.png/revision/latest?cb=20150729172535');


client.on('message', message => {
	if(message.content.toLowerCase() === '$invite') {
	  message.channel.send(`${exampleEmbed}`);
	}
  });
