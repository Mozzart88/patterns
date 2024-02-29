import Beverage from './Beverage.js'

export default class HouseBlend extends Beverage {
	private readonly price: number

	constructor() {
		super('House Blend')
		this.price = 0.89
	}

	cost(): number {
		return this.price
	}
}