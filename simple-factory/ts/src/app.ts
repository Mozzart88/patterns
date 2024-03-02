import Pizza from './domain/model/Pizza.js'
import PizzaStore from './application/PizzaStore.js'
import NYPizzaFactory from './domain/model/factory/NYPizzaFactory.js'
import ChicagoPizzaFactory from './domain/model/factory/ChicagoPizzaFactory.js'
import CaliforniaPizzaFactory from './domain/model/factory/CaliforniaPizzaFactory.js'

const nyFactory = new NYPizzaFactory()
const chicagoFactory = new ChicagoPizzaFactory()
const californiaFactory = new CaliforniaPizzaFactory()

const nyStore = new PizzaStore(nyFactory)
let pizza = nyStore.orderPizza('pepperoni')

const chicagoStore = new PizzaStore(chicagoFactory)
pizza = chicagoStore.orderPizza('cheese')

const californiaStore = new PizzaStore(californiaFactory)
pizza = californiaStore.orderPizza('veggie')
