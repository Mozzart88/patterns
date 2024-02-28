import IObserver from "../domain/service/IObserver.js";

export default interface IPublisher {
	addObserver(observer: IObserver): void
	removeObserver(observer: IObserver): void
	notify(): void
}