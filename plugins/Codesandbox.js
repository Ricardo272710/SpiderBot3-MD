let handler = (m) => m;
handler.all = async function (m) {


  if (/^Eliasl|Elias|Elias|Elias|Elias|Elias$/i.test(m.text)) {
    var ax = `Whaos ese es mi creador  @${global.suittag=595972157130}`;


    m.reply(ax, m.chat, { mentions: conn.parseMention(ax)}); 
  return !0
}}
export default handler
