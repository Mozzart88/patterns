import WeaponBehavior from "./WeaponBehavior.js";

export default class BowAndArrowBehavior implements WeaponBehavior{
	public userWeapon(): void {
		console.log('Bow and Arrows used!')
	}
}