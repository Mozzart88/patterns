import WeaponBehavior from "./WeaponBehavior.js";

export default class AxeBehavior implements WeaponBehavior{
	public userWeapon(): void {
		console.log('Axe used!')
	}
}