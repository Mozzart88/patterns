import Pizza from '../domain/model/Pizza.js'

export default abstract class PizzaStore {
	orderPizza(type: string): Pizza | undefined {
		const pizza = this.createPizza(type)

		pizza?.prepare()
		pizza?.bake()
		pizza?.cut()
		pizza?.box()
		return pizza
	}
	
	abstract createPizza(type: string): Pizza | undefined
}
