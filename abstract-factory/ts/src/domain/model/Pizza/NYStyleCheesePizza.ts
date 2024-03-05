import Pizza from './Pizza.js'
import {
	ThinCrustDough,
	MarinaraSauce,
	ReggianoCheese
} from '../Ingredient/Ingredients.js'

export default class NYStyleCheesePizza extends Pizza {
	constructor() {
		super(
		{
			name: 'NY Style Sauce and Cheese Pizza',
			dough: new ThinCrustDough(),
			sauce: new MarinaraSauce(),
			cheese: new ReggianoCheese()
		}
		)
	}
}
