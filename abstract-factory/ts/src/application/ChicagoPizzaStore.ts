import PizzaStore from './PizzaStore.js'
import ChicagoStyleCheesePizza from '../domain/model/Pizza/ChicagoStyleCheesePizza.js'
import Pizza from '../domain/model/Pizza/Pizza.js'

export default class extends PizzaStore {
	protected createPizza(type: string): Pizza | never {
		if (type.toLowerCase() == 'cheese')
			return new ChicagoStyleCheesePizza()
		throw new Error('Sorry we dont\'t have this type of pizza')
	}
}

