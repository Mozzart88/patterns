import IPublisher from "../application/IPublisher.js";
import IObserver from "../domain/service/IObserver.js";

export default class WeatherData implements IPublisher {
	private observers?: Set<IObserver>
	private tempreture: number = 0
	private pressure: number = 788
	private humidity: number = 0

	constructor() {
		setInterval(
			() => this.readSensors(),
			1000
		)
	}

	addObserver(observer: IObserver): void {
		if (!this.observers)
			this.observers = new Set<IObserver>()
		this.observers.add(observer)
	}

	removeObserver(observer: IObserver): void {
		if (this.observers)
			this.observers.delete(observer)
	}

	notify(): void {
		if (!this.observers)
			return

		for (const observer of this.observers) {
			observer.update(this as Object, {
				pressure: this.getPressure(),
				tempreture: this.getTempreture(),
				humidity: this.getHumidity()
			})
		}
	}

	private setHumidity(v: number): void {
		this.humidity = v
	}

	getHumidity(): number {
		return this.humidity
	}

	private setTempreture(v: number): void {
		this.tempreture = v
	}

	getTempreture(): number {
		return this.tempreture
	}

	private setPressure(v: number): void {
		this.pressure = v
	}

	getPressure(): number {
		return this.pressure
	}

	measurmentsChanged(): void {
		this.notify()
	}

	private readSensors(): void {
		const temp = Math.floor(this.getTempreture() * 10)
		const press = Math.floor(this.getPressure() * 100)
		const humid = Math.floor(this.getHumidity() * 1)

		let min = temp > -870 ? temp - 2: -890
		let max = temp < 550 ? temp + 2: 570
		this.setTempreture(this.getRandomNumber(min, max) / 10)
		
		min = humid > 0 ? humid - 2: humid
		max = humid < 98 ? humid + 2: 100
		this.setHumidity(this.getRandomNumber(min, max) / 1)
		
		min = press > 67700 ? press - 2: 67500
		max = press < 78600 ? press + 2: 78800
		this.setPressure(this.getRandomNumber(min, max) / 100)

		this.measurmentsChanged()
	}

	private getRandomNumber(min: number, max: number): number {
		return Math.floor(
			Math.random() * (max - min + 1) 
		) + min
	}
}