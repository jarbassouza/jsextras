import { Notifyer } from "./Notifyer.js"
import { Timer } from "./Timer.js"
import { Emitter } from "./Emitter.js"

const App = {
	async start() {
		try {
			await Notifyer.init()

			Emitter.on("countdown-start", () => {
				Notifyer.notify({
					title: "Hora de Postar",
					body: "Poste Algum Conteudo ...",
				})
			})
			Emitter.on("countdown-end", () => {
				Timer.init()
			})

			Timer.init(10 * 60)
		} catch (err) {
			console.log(err.message)
		}
	},
}
export { App }