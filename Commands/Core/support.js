module.exports = {
    name: "support",
    alias: ["supportgc"],
    desc: "Sends support group link.",
    cool:3,
    react: "π‘",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        m.reply(`Check your DM *${pushName}* Senpai !\n\nI have sent you support group link personally.`)
        let botpic = botImage1
        let txt = `      π§£ *Support Group* π§£\n\n*${botName}* is ππΎπΌπ°π½ and we are always happy to help you.\n\n*Link:*https://chat.whatsapp.com/JTTwcmElglZEKmPNrg8VRA\n\n*Note:* Please don't spam in the group, and don't message *Admins directly* without permission. Ask for help in *Group*.\n\n*Thanks for using Atlas.*`
        await Miku.sendMessage(m.sender,{image:{url:botpic}, caption:txt},{quoted:m})
    }
}
