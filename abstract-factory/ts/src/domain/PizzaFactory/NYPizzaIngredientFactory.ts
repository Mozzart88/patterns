import PizzaIngredientFactory from './PizzaIngredientFactory.js'
import Dough from '../model/Ingredient/Dough.js'
import Cheese from '../model/Ingredient/Cheese.js'
import Sauce from '../model/Ingredient/Sauce.js'
import Veggie from '../model/Ingredient/Veggie.js'
import Pepperoni from '../model/Ingredient/Pepperoni.js'
import Clam from '../model/Ingredient/Clam.js'
import ThinCrustDough from '../model/Ingredient/ThinCrustDough.js'
import ReggianoCheese from '../model/Ingredient/ReggianoCheese.js'
import MarinaraSauce from '../model/Ingredient/MarinaraSauce.js'
import Onion from '../model/Ingredient/Onion.js'
import RedPepper from '../model/Ingredient/RedPepper.js'
import Garlic from '../model/Ingredient/Garlic.js'
import Mushroom from '../model/Ingredient/Mushroom.js'
import SlicedPepperoni from '../model/Ingredient/SlicedPepperoni.js'
import FreshClam from '../model/Ingredient/FreshClam.js'

export default class NYPizzaIngredientFactory implements PizzaIngredientFactory {
	createDough(): Dough {
		return new ThinCrustDough()
	}
	createCheese(): Cheese {
		return new ReggianoCheese()
	}
	createSauce(): Sauce {
		return new MarinaraSauce()
	}
	createVeggies(): Array<Veggie> {
		return [new Onion(), new RedPepper(), new Garlic(), new Mushroom()]
	}
	createPepperoni(): Pepperoni {
		return new SlicedPepperoni()
	}
	createClam(): Clam {
		return new FreshClam()
	}
}
