import Beverage from "./Beverage.js";

export default class DarkRoast extends Beverage {
	private readonly price: number
	constructor() {
		super('Dark Roast')
		this.price = 0.99
	}

	cost(): number {
		return this.price
	}
}