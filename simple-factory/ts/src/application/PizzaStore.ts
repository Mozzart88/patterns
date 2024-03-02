import Pizza from '../domain/model/Pizza.js'
import SimplePizzaFactory from '../domain/model/factory/SimplePizzaFactory.js'

export default class PizzaStore {
	protected factory: SimplePizzaFactory

	constructor(factory: SimplePizzaFactory){
		this.factory = factory
	}

	orderPizza(type: string): Pizza | undefined {
		const pizza = this.factory.createPizza(type)

		pizza?.prepare()
		pizza?.bake()
		pizza?.cut()
		pizza?.box()
		return pizza
	}
}
