import CondimentDecorator from './CondimentDecorator.js'
import Beverage from './Beverage.js'

export default class Mocha extends CondimentDecorator {
	private readonly price: number
	private readonly beverage: Beverage

	constructor(beverage: Beverage) {
		super('Mocha')
		this.beverage = beverage
		this.price = 0.20
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