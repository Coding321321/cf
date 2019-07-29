const Antispam = require('antispam-discord');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", async message => {
    if (message.channel.type == "dm") return;

    let datos = await Antispam.verificar(message, {
        max_advertencias: 10,
        flood_puntos: 1,
        mencion_puntos: 5,
        invitaciones: true,
        invite_puntos: 5,
        usuarios: [],
        canales: []
    })

    let warnembed = new Discord.RichEmbed()
    let mutedembed = new Discord.RichEmbed()
    warnembed.setColor("#ff5f00")
    warnembed.setAuthor(message.author.tag, message.author.displayAvatarURL)
    mutedembed.setColor("#cc0000")
    mutedembed.setAuthor(message.author.tag, message.author.displayAvatarURL)


    if (datos) { //si el usuario fue detectado

        let muted_rol = message.guild.roles.find(r => r.name == "muted") //obtenemos el rol muted

        if (datos.duplicado) { //en caso de que la deteccion de caracteres duplicados sea verdadera
            message.delete() //eliminamos el mensaje
            warnembed.setDescription(`**${message.author.tag}** envio un mensaje en ${message.channel} que contenia multiples caracteres iguales.\n**Mensaje:**\n${message.content.length < 1000 ? message.content : message.content.slice(0, 500) + ".."}`)
            return client.channels.get("CANAL_ID").send(warnembed)
        }

        else if (datos.mencion) {  //en caso de que la deteccion de menciones sea verdadera
            message.delete() //eliminamos el mensaje
            let cantidad = datos.mencion.cantidad //obtenemos la cantidad de menciones
            let advertencias = datos.mencion.advertencias //obtenemos la cantidad de advertencias actuales
            let detectado = datos.mencion.detectado //obtenemos el valor

            warnembed.setDescription(`**${message.author.tag}** hizo ${cantidad} menciones en el canal ${message.channel}.\n**Advertencias:** ${advertencias}\n**Mensaje:**\n${message.content.length < 1000 ? message.content : message.content.slice(0, 500) + ".."}`)
            client.channels.get("CANAL_ID").send(warnembed)

            if (detectado) { //verificamos si el usuario llego al limite de advertencias
                if (!muted_rol) return;
                message.member.addRole(muted_rol.id) //le agregamos el rol muted
                mutedembed.setDescription(`**__SPAMMER DETECTADO__**\n**${message.author.tag}** llego al limite de advertencias: **${advertencias}**\nSe ejecuto la prevencion.`)
                client.channels.get("CANAL_ID").send(mutedembed)
            }
            return;
        }

        else if (datos.flood) { //en caso de que la deteccion de flood sea verdadera
            let tiempo = datos.flood.tiempo //obtenemos el tiempo
            let cantidad = datos.flood.cantidad //obtenemos la cantidad de mensajes
            let advertencias = datos.flood.advertencias //obtenemos la cantidad de advertencias actuales
            let detectado = datos.flood.detectado //obtenemos el valor

            warnembed.setDescription(`**${message.author.tag}** envio **${cantidad}** mensajes en ${message.channel} con un tiempo de ${tiempo}.\n**Advertencias:** ${advertencias}`)
            client.channels.get("CANAL_ID").send(warnembed)

            if (detectado) { //verificamos si el usuario llego al limite de advertencias
                if (!muted_rol) return;
                message.member.addRole(muted_rol.id) //le agregamos el rol muted
                mutedembed.setDescription(`**__SPAMMER DETECTADO__**\n**${message.author.tag}** llego al limite de advertencias: **${advertencias}**\nSe ejecuto la prevencion.`)
                client.channels.get("CANAL_ID").send(mutedembed)
            }
            return
        }

        else if (datos.invitacion) { //en caso de que la deteccion de invitaciones sea verdadera
            message.delete(); //eliminamos el mensaje de la invitacion
            let link = datos.invitacion.url //obtenemos el url
            let servidor = datos.invitacion.servidor //obtenemos el nombre del servidor
            let serverid = datos.invitacion.id //obtenemos el id del servidor
            let advertencias = datos.invitacion.advertencias //obtenemos la cantidad de advertencias actuales
            let detectado = datos.invitacion.detectado //obtenemos el valor

            warnembed.setDescription(`**${message.author.tag}** envio una invitacion en el canal ${message.channel}\n**Link:** ${link}\n**Servidor:** ${servidor}\n**ID del servidor:** ${serverid}.\n**Advertencias:** ${advertencias}`)
            client.channels.get("CANAL_ID").send(warnembed)

            if (detectado) { //verificamos si el usuario llego al limite de advertencias
                if (!muted_rol) return;
                message.member.addRole(muted_rol.id) //le agregamos el rol muted
                mutedembed.setDescription(`**__SPAMMER DETECTADO__**\n**${message.author.tag}** llego al limite de advertencias: **${advertencias}**\nSe ejecuto la prevencion.`)
                client.channels.get("CANAL_ID").send(mutedembed)
            }
            return
        }

    }

    if (message.author.bot) return; //esto irá al final de todo el codigo de deteccion del spam ya que los bots tambien pueden hacer spam.

    //tu codigo restante, comandos, etc.
})
