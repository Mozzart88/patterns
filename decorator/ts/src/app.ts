import Beverage from './domain/model/Beverage.js'
import Milk from './domain/model/Milk.js'
import Mocha from './domain/model/Mocha.js'
import Espresso from './domain/model/Espresso.js'
import Soy from './domain/model/Soy.js'
import DarkRoast from './domain/model/DarkRoast.js'
import Whip from './domain/model/Whip.js'

let order: Beverage = new Milk(new Mocha(new Espresso()))
console.log('Ordered: ', order.getDescription())
console.log('Total: ', order.cost())

order = new Soy(new Mocha(new Whip(new DarkRoast())))
console.log('Ordered: ', order.getDescription())
console.log('Total: ', order.cost())