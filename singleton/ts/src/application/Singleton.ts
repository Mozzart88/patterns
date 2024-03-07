export default class Singleton {
	private static _instance: Singleton
	private _val: string

	private constructor(val: string) {
		this._val = val
	}

	static instance(val: string): Singleton {
		if (!Singleton._instance)
			Singleton._instance = new Singleton(val)
		return Singleton._instance
	}

	set val(val: string) {
		this._val = val
	}

	toString(): String {
		return `Singleton::val = ${this._val}`
	}
}
