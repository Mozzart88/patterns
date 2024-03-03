import Pizza from './Pizza.js'

export default class ChicagoStyleCheesePizza extends Pizza {
	constructor() {
		super(
		'Chicage Style Deep Dish Cheese Pizza',
		'Extra Thick Crust Dough',
		'Plum Tomato Sauce',
		['Shredded Mozzarella Cheese']
		)
	}

	cut(): void {
		console.log('Cutting the pizza into square slices')
	}
}
