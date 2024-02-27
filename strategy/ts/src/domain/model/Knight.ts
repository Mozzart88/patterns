import Character from "./Character.js";
import WeaponBehavior from "./fight/WeaponBehavior.js";

export default class Knight extends Character{
	constructor (w: WeaponBehavior) {
		super(w)
	}
	fight(): void {
		this.weapon.userWeapon()
	}
}