let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • AXIS [083834441926]
│ • Telkomsel [081285866502]
╰────

╭─「 Donasi • Non Pulsa 」
│ • GOPAY : 089525518325
│ • DANA : 081285866502
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
