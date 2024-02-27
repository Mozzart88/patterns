import WeaponBehavior from "./WeaponBehavior.js";

export default class KnifeBehavior implements WeaponBehavior{
	public userWeapon(): void {
		console.log('Knife used!')
	}
}