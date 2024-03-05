import NYPizzaStore from './application/NYPizzaStore.js'
import Pizza from './domain/model/Pizza/Pizza.js'
import ChicagoPizzaStore from './application/ChicagoPizzaStore.js'

const nyStore = new NYPizzaStore()
let pizza = nyStore.orderPizza('cheese')
console.log(`Ethan ordered a ${pizza?.name}`)

const chicagoStore = new ChicagoPizzaStore()
pizza = chicagoStore.orderPizza('cheese')
console.log(`Joel ordered a ${pizza!.name}`)
