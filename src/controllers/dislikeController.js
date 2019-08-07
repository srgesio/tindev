const dev = require("../models/dev")

module.exports = {
    async store(req, res) {

        const { devId } = req.params;
        const { user } = req.headers;

        const loggedDev = await dev.findById(user);
        const targetDev = await dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json({ error: "Desenvolvedor Inexistente" })
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev)
    }
}
// continuar em 54:35 do vídeo 2 da Ominstack