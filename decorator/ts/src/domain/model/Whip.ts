import CondimentDecorator from './CondimentDecorator.js'
import Beverage from './Beverage.js'

export default class Whip extends CondimentDecorator {
	private readonly price: number
	private readonly beverage: Beverage

	constructor(beverage: Beverage) {
		super('Whip')
		this.beverage = beverage
		this.price = 0.10
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