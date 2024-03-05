import {
	Cheese,
	Dough,
	Sauce,
	Pepperoni,
	Clam,
	Veggie
} from '../Ingredient/Ingredients.js'


export default abstract class Pizza {
	protected readonly _name: string
	protected readonly _dough: Dough
	protected readonly _sauce: Sauce
	protected readonly _cheese: Cheese
	protected readonly _veggies: Array<Veggie> = []
	protected readonly _clam?: Clam
	protected readonly _pepperoni?: Pepperoni
	
	constructor(
		{ name, dough, sauce, cheese, pepperoni, clam, veggies}:
		{
			name: string,
			dough: Dough,
			sauce: Sauce,
			cheese: Cheese,
			pepperoni?: Pepperoni,
			clam?: Clam,
			veggies?: Array<Veggie>
		}
		) {
		this._name = name
		this._dough = dough
		this._sauce = sauce
		this._clam = clam
		this._pepperoni = pepperoni
		this._cheese = cheese
		veggies?.forEach((veggie: Veggie) => this._veggies.push(veggie))
	}

	get name(): string {
		return this._name
	}

	prepare(): void {
		console.log(`Prepering ${this.name}`)
		console.log(`Tossing ${this._dough}`)
		console.log(`Adding ${this._sauce}`)
		console.log(`Adding ${this._cheese}`)
		if (this._veggies.length) {
			console.log('Adding veggies: ')
			this._veggies.forEach((veggie)=>console.log(`	${veggie}`))
		}
		if (this._pepperoni) 
			console.log(`Adding ${this._pepperoni}`)
		if (this._clam) 
			console.log(`Adding ${this._clam}`)

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
