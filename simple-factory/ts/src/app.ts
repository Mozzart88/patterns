import Pizza from './domain/model/Pizza.js'
import PizzaStore from './application/PizzaStore.js'
import SimplePizzaFactory from './domain/model/factory/SimplePizzaFactory.js'

const factory = new SimplePizzaFactory()
const store = new PizzaStore(factory)
const pizza = store.orderPizza('pepperoni')

