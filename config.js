/* ⚙️ Credits to:
* AzamiJs
* Elrebelde21
* GataNina-Li */

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

 global.owner = [
['593979133620', '💻Ricardo - Desarrollador.👑', true],
['593979133620', 'Ricardo Adm', true],
['50764206082', 'Anthony Org', true]]

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = '' //Ejemplo: +59379133620
global.confirmCode = ''

global.suittag = ['59379133620']
global.mods = []
global.prems = []

//Solo desarrolladores aprobados
global.isdev = [ /* ['5217294888993'], */ ['59379133620'], ['5492266466080'], ['5492266613038'], ['573012482597'], ['5215610314499'], ['51935531943'], ['33760536110'], ['5492964650915'], ['50558124470'], ['573012482597']]

global.packname = '🕷️ 𝙨𝙥𝙞𝙙𝙚𝙧 𝙗𝙤𝙩 -MD🐼'
global.author = '🕷️𝙍𝙞𝙘𝙖𝙧𝙙𝙤 𝘼𝘿𝙈'
global.wm = ' 🕷️ 𝙨𝙥𝙞𝙙𝙚𝙧 𝙗𝙤𝙩-𝐌𝐃 💥'
global.wm2 = '☄️ 𝙨𝙥𝙞𝙙𝙚𝙧 𝙗𝙤𝙩-𝑴𝑫 🌟'
global.jxtxn = '🕷️𝙍𝙞𝙘𝙖𝙧𝙙𝙤 𝘼𝘿𝙈'
global.cb = '🕷️ 𝙨𝙥𝙞𝙙𝙚𝙧 𝙗𝙤𝙩-𝙼𝙳 🍭'

global.vs = '1.0.2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'BY ⺪⃢łV₳₦🇵🇾⃢乂'
global.devnum = '+595972157130'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
