import WeaponBehavior from "./fight/WeaponBehavior.js";

export default abstract class Character {
	weapon: WeaponBehavior
	abstract fight(): void

	protected constructor (w: WeaponBehavior) {
		this.weapon = w
	} 
	setWeapon(w: WeaponBehavior): void {
		this.weapon = w
	}
}