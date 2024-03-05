import Dough from '../model/Ingredient/Dough.js'
import Sauce from '../model/Ingredient/Sauce.js'
import Veggie from '../model/Ingredient/Veggie.js'
import Cheese from '../model/Ingredient/Cheese.js'
import Pepperoni from '../model/Ingredient/Pepperoni.js'
import Clam from '../model/Ingredient/Clam.js'

export default interface PizzaIngredientFactory {
	createDough(): Dough
	createSauce(): Sauce
	createCheese(): Cheese
	createVeggies(): Array<Veggie>
	createPepperoni(): Pepperoni
	createClam(): Clam
}

