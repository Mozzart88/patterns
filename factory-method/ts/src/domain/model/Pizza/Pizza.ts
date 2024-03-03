export default abstract class Pizza {
	protected readonly _name: string
	protected readonly _dough: string
	protected readonly _sauce: string
	protected readonly _toppings: Array<string> = []
	
	constructor(
			name: string,
			dough: string,
			sauce: string,
			toppings: Array<string>
		) {
		this._name = name
		this._dough = dough
		this._sauce = sauce
		for (const topping of toppings) 
			this._toppings.push(topping)
	}

	get name(): string {
		return this._name
	}

	prepare(): void {
		console.log(`Prepering ${this.name}`)
		console.log('Tossing dough...')
		console.log('Adding sauce...')
		console.log('Adding toppings: ')
		this._toppings.forEach((topping)=>console.log(`	${topping}`))
	}

	bake(): void {
		console.log('Bake for 25 minutes at 350')
	}

	cut(): void {
		console.log('Cuting the pizza into diagonal slices')
	}

	box(): void {
		console.log('Place pizza in official PizzaStore box')
	}
}
