import Beverage from "./Beverage.js";

export default class Decaf extends Beverage {
	private readonly price: number
	constructor() {
		super('Decaf')
		this.price = 1.05
	}
	cost(): number {
		return this.price
	}
}