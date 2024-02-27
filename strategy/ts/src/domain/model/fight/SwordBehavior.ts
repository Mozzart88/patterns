import WeaponBehavior from "./WeaponBehavior.js";

export default class SwordBehavior implements WeaponBehavior{
	public userWeapon(): void {
		console.log('Sword used!')
	}
}