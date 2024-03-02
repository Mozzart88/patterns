import Pizza from '../Pizza.js'
import CheesePizza from '../CheesePizza.js'
import PepperoniPizza from '../PepperoniPizza.js'
import ClamPizza from '../ClamPizza.js'
import VeggiePizza from '../VeggiePizza.js'

export default class SimplePizzaFactory {
	createPizza(type: string): Pizza | undefined {
		if (type == 'chees')
			return new CheesePizza()
		if (type == 'pepperoni')
			return new PepperoniPizza()
		if (type == 'clam')
			return new ClamPizza()
		if (type == 'veggie')
			return new VeggiePizza()
	}
}
