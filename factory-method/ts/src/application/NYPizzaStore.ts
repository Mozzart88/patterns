import PizzaStore from './PizzaStore.js'
import NYStyleCheesePizza from '../domain/model/Pizza/NYStyleCheesePizza.js'
import Pizza from '../domain/model/Pizza/Pizza.js'

export default class NYPizzaStore extends PizzaStore {
	protected createPizza(type: string): Pizza | never {
		if (type.toLowerCase() == 'cheese')
			return new NYStyleCheesePizza()
		throw new Error('Sorry we have\'nt this type of pizza')
	}
}
