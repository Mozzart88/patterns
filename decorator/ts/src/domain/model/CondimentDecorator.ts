import Beverage from './Beverage.js'

export default abstract class CondimentDecorator extends Beverage {
	public abstract getDescription(): String
}