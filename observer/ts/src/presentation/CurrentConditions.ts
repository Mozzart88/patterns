import IDisplay from "../application/IDisplay.js";
import IObserver from "../domain/service/IObserver.js";

export default class CurrentConditions implements IObserver, IDisplay {
	private temp: number = 0
	private humid: number = 0
	private press: number = 0

	display(): void {
		const temp = this.temp
		const press = this.press
		const humid = this.humid

		console.log('tempreture: ', temp)
		console.log('pressure: ', press)
		console.log('humidity: ', humid)
	}

	update(obj: Object, data: Object): void {
		const {
			tempreture,
			pressure,
			humidity
		} = data as {tempreture: number,
			pressure: number,
			humidity: number}
		this.temp = tempreture
		this.press = pressure
		this.humid = humidity

		this.display()
	}
	
}