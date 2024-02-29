import CondimentDecorator from './CondimentDecorator.js'
import Beverage from './Beverage.js'

export default class Milk extends CondimentDecorator {
	private readonly price: number
	private readonly beverage: Beverage

	constructor(beverage: Beverage) {
		super('Milk')
		this.price = 0.10
		this.beverage = beverage
	}

	getDescription(): String {
		if (this.beverage instanceof CondimentDecorator)
			return `${this.beverage.getDescription()}, ${this.description}`
		return `${this.beverage.getDescription()} whit ${this.description}`
	}

	cost(): number {
		return this.price + this.beverage.cost()
	}
}