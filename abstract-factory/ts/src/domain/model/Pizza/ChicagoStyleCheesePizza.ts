import Pizza from './Pizza.js'
import {
	ThinCrustDough,
	PlumTomatoSauce,
	MazzarellaCheese,
} from '../Ingredient/Ingredients.js'

export default class ChicagoStyleCheesePizza extends Pizza {
	constructor() {
		super({
			name: 'Chicage Style Deep Dish Cheese Pizza',
			dough: new ThinCrustDough(),
			sauce: new PlumTomatoSauce(),
			cheese: new MazzarellaCheese(),
		}
		)
	}

	cut(): void {
		console.log('Cutting the pizza into square slices')
	}
}
