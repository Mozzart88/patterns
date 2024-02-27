import Knight from "./domain/model/Knight.js";
import Queen from "./domain/model/Queen.js";
import Troll from "./domain/model/Troll.js";
import AxeBehavior from "./domain/model/fight/AxeBehavior.js";
import BowAndArrowBehavior from "./domain/model/fight/BowAndArrowBehavior.js";
import KnifeBehavior from "./domain/model/fight/KnifeBehavior.js";
import SwordBehavior from "./domain/model/fight/SwordBehavior.js";

const sword = new SwordBehavior()

const knight = new Knight(sword)


const bowAndArrows = new BowAndArrowBehavior()
const knife = new KnifeBehavior()
const queen = new Queen(knife)

const axe = new AxeBehavior()
const troll = new Troll(axe)

knight.fight()
troll.fight()
queen.fight()
queen.setWeapon(bowAndArrows)
queen.fight()