# botcoin
BotCoin es un bot para Discord, creado por la comunidad de Codederhood.

Sirve de ejemplo para que en muy pocos pasos podamos tener nuestro propio bot :D

## Uso
El bot lee todos los mensajes, para usar un comando en particular, el mensaje debe empezar con el string definido como prefix, y despues el nombre que exportemos de nuestro comando en la carpeta de comandos.

De esta forma para saber el precio del dolar, en el chat escribimos `/botcoin dolar` y ejecutará commands/dolar.js

De esta forma extender el bot para saber el precio del euro, es muy simple, podemos sumar euro.js en la carpeta de comandos, reemplazar la URL donde se consume el precio del dolar, y ningun otro cambio será necesario.

Ademas está el archivo reaction.js, donde le llegan todos los mensajes, no importa si el mensaje empieza con el prefix definido.

## Development

Para subir nuestro bot, primero debemos crear uno en la plataforma de Discord

https://discord.com/developers

Usen esta guia => https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot

De esto vamos a necesitar el `TOKEN` y el `client_id` esta guia es super completa

### Invite
https://discord.com/oauth2/authorize?client_id=123456789012345678&scope=bot
usen su propio `client_id` :P

### Token
El token es el acceso que tiene nuestro bot en Discord, es como una contraseña, no lo compartan nunca, ni lo guarden en el codigo
Así que vamos a usar variables de entorno, en el siguiente ejemplo vamos a simplemente exportar las variables, no vamos a entrar en mas detalle, pero si quieren ser un poco mas prolijos, pueden usar un gestor de variables como https://direnv.net/ pero excede el proposito de este curso.

#### Windows
set TOKEN=untokenmuylargoconletrasy123123
set PORT=80

#### Linux/Mac
export TOKEN=untokenmuylargoconletrasy123123
export PORT=80

### Cómo instalar
Teniendo Node listo ejecutando:
`npm install`
`npm start`
es suficiente :D
Con esto nuestro Bot ya funciona

Si no lo tienen -> https://nodejs.org/es/

## Hosting
Para que nuestro bot esté online, cuando apaguemos la computadora, vamos a necesitar que este proceso se ejecute en un servidor externo.
Cómo opcion gratuita recomiendo Heroku.
https://www.heroku.com/
Creando una cuenta gratuita, y que escuche los cambios de nuestro repo en GitHub es mas que suficiente, y deberia funcionar sin mas configuracion que agregar las variables `TOKEN` y `PORT` en la seccion Settings -> Config Vars

Estos servicios estan pensados para una aplicacion Node que responde cuando le llegan request HTTP, en nuestro caso, si no le llegan request por mas de 30 minutos, la aplicacion se va a pausar, y nuestro Bot no va a funcionar mas :S
Para esto debemos agregar un servicio que mantenga vivo nuestro bot, cada 30 minutos al menos
Podemos usar un servicio gratuito como https://cron-job.org/
Nos registramos, y configuramos un `Ping` cada 30 minutos a nuestra app de Heroku -> https://botcoin-coderhood.herokuapp.com/
El plan gratuito de Heroku no nos garantiza 24/7 pero el proposito de este curso es tener nuestro bot funcionando con la menor friccion posible.

## Coderhood
Para cualquier consulta o aporte te esperamos en la comunidad http://coderhood.dev/

Tambien sumate a Nuestro server de Discord https://discord.gg/eN9SX68 <3