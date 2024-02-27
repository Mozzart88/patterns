import Character from "./Character.js";
import WeaponBehavior from "./fight/WeaponBehavior.js";

export default class King extends Character{
	constructor (w: WeaponBehavior) {
		super(w)
	}
	fight(): void {
		this.weapon.userWeapon()
	}
}