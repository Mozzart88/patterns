import Beverage from "./Beverage.js";

export default class Espresso extends Beverage {
	private readonly price: number

	constructor() {
		super('Espresso')
		this.price = 1.99
	}

	cost() {
		return this.price
	}
}