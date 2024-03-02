export default abstract class Pizza {
	protected readonly _name: string
	
	constructor(name: string) {
		this._name = name
	}

	get name(): string {
		return this._name
	}

	prepare(): void {
		console.log(`Prepering ${this.name}`)
	}

	bake(): void {
		console.log(`Baking ${this.name}`)
	}

	cut(): void {
		console.log(`Cuting ${this.name}`)
	}

	box(): void {
		console.log(`Boxing ${this.name}`)
	}
}
