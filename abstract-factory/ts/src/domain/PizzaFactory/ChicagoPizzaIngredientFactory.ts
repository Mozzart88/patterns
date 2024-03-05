import PizzaIngredientFactory from './PizzaIngredientFactory.js'
import Dough from '../model/Ingredient/Dough.js'
import Cheese from '../model/Ingredient/Cheese.js'
import Sauce from '../model/Ingredient/Sauce.js'
import Veggie from '../model/Ingredient/Veggie.js'
import Pepperoni from '../model/Ingredient/Pepperoni.js'
import Clam from '../model/Ingredient/Clam.js'
import ThinCrustDough from '../model/Ingredient/ThinCrustDough.js'
import MazzarellaCheese from '../model/Ingredient/MazzarellaCheese.js'
import PlumTomatoSauce from '../model/Ingredient/PlumTomatoSauce.js'
import BlackOlives from '../model/Ingredient/BlackOlives.js'
import Spinach from '../model/Ingredient/Spinach.js'
import Eggplant from '../model/Ingredient/Eggplant.js'
import SlicedPepperoni from '../model/Ingredient/SlicedPepperoni.js'
import FrozenClam from '../model/Ingredient/FrozenClam.js'

export default class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
	createDough(): Dough {
		return new ThinCrustDough()
	}
	createCheese(): Cheese {
		return new MazzarellaCheese()
	}
	createSauce(): Sauce {
		return new PlumTomatoSauce()
	}
	createVeggies(): Array<Veggie> {
		return [new BlackOlives(), new Spinach(), new Eggplant()]
	}
	createPepperoni(): Pepperoni {
		return new SlicedPepperoni()
	}
	createClam(): Clam {
		return new FrozenClam()
	}
}
