// function getRandomNumber(min: number, max: number): number {
// 	return Math.floor(
// 		Math.random() * (max - min + 1) 
// 	) + min
// }

import WeatherData from "./infrastructure/WeatherData.js";
import CurrentConditions from "./presentation/CurrentConditions.js";

// setInterval(
// 	() => console.log(getRandomNumber(786, 790)),
// 	100
// )


const current = new CurrentConditions()
const wd = new WeatherData()

wd.addObserver(current)
setTimeout(() => {
	wd.removeObserver(current)
}, 60000)
