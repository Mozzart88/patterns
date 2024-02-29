export default abstract class Beverage {
	protected readonly description: String

	constructor(description: String) {
		this.description = description
	}
	
	getDescription(): String {
		return this.description
	}

	abstract cost(): number
}