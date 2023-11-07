import * as cards from './cards'

export interface MegaDraft {
    cards: cards.Card[],
}

const cycle: cards.Card[] = [
    cards.Skeletons,
    cards.IceSpirit,
    cards.FireSpirit,
    cards.HealSpirit,
    cards.ElectroSpirit
]

const swarm: cards.Card[] = [
    cards.Goblins,
    cards.Barbarians,
    cards.SkeletonArmy,
    cards.SpearGoblins,
    cards.MinionHorde,
    cards.GoblinGang,
    cards.RoyalRecruits,
    cards.Bats,
    cards.WallBreakers
]

const misc: cards.Card[] = [
    cards.Rage,
    cards.Clone,
    cards.Freeze,
    cards.Mirror
];

const champions: cards.Card[] = [
    cards.ArcherQueen,
    cards.GoldenKnight,
    cards.MightyMiner,
    cards.LittlePrince,
    cards.SkeletonKing,
    cards.Monk
];

const aoe: cards.Card[] = [
    cards.Witch,
    cards.Valkyrie,
    cards.Bomber,
    cards.BabyDragon,
    cards.Princess,
    cards.DarkPrince,
    cards.Bowler,
    cards.Executioner,
    cards.MegaKnight,
    cards.Firecracker,
    cards.RoyalDelivery
];

const winConditions: cards.Card[] = [
    cards.Giant,
    cards.PEKKA,
    cards.Balloon,
    cards.Golem,
    cards.HogRider,
    cards.RoyalGiant,
    cards.ThreeMusketeers,
    cards.LavaHound,
    cards.Miner,
    cards.BattleRam,
    cards.EliteBarbarians,
    cards.RamRider,
    cards.SkeletonBarrel,
    cards.RoyalHogs,
    cards.GoblinGiant,
    cards.ElixirGolem,
    cards.ElectroGiant,
    cards.Mortar,
    cards.XBow,
    cards.GoblinDrill,
    cards.GoblinBarrel,
    cards.Graveyard
];

const tankKillers: cards.Card[] = [
    cards.MiniPEKKA,
    cards.Sparky,
    cards.InfernoDragon,
    cards.Lumberjack,
    cards.Hunter
];

const defensiveBuildings: cards.Card[] = [
    cards.Cannon,
    cards.GoblinHut,
    cards.Tesla,
    cards.InfernoTower,
    cards.GoblinCage,
    cards.Furnace,
    cards.BarbarianHut,
    cards.BombTower,
    cards.ElixirCollector,
    cards.Tombstone
];

const defensiveTroops: cards.Card[] = [
    cards.Knight,
    cards.Minions,
    cards.Prince,
    cards.GiantSkeleton,
    cards.Guards,
    cards.IceGolem,
    cards.MegaMinion,
    cards.Bandit,
    cards.RoyalGhost,
    cards.Zappies,
    cards.Rascals,
    cards.CannonCart,
    cards.Fisherman,
    cards.BattleHealer,
    cards.Phoenix
];

const antiSwarmSpells: cards.Card[] = [
    cards.Arrows,
    cards.Zap,
    cards.Poison,
    cards.TheLog,
    cards.Tornado,
    cards.BarbarianBarrel,
    cards.Snowball
];

const damageSpell: cards.Card[] = [
    cards.Fireball,
    cards.Lightning,
    cards.Rocket,
    cards.Earthquake
];

const supportTroops: cards.Card[] = [
    cards.Musketeer,
    cards.Wizard,
    cards.IceWizard,
    cards.DartGoblin,
    cards.ElectroWizard,
    cards.NightWitch,
    cards.FlyingMachine,
    cards.MagicArcher,
    cards.ElectroDragon,
    cards.SkeletonDragons,
    cards.MotherWitch,
    cards.Archers
];

const miscCount = 1;
const championCount = 3;
const cycleCount = 2;
const aoeCount = 4;
const WinConditionCount = 4;
const swarmCount = 4;
const tankKillerCount = 2;
const defensiveBuildingCount = 4;
const defensiveTroopCount = 4;
const antiSwarmSpellCount = 2;
const damageSpellCount = 2;
const supportTroopCount = 4;

export function createMegaDraft(): MegaDraft {
    return {
        cards: [
            ...getRandomUniqueItems(misc, miscCount),
            ...getRandomUniqueItems(champions, championCount),
            ...getRandomUniqueItems(cycle, cycleCount),
            ...getRandomUniqueItems(aoe, aoeCount),
            ...getRandomUniqueItems(winConditions, WinConditionCount),
            ...getRandomUniqueItems(swarm, swarmCount),
            ...getRandomUniqueItems(tankKillers, tankKillerCount),
            ...getRandomUniqueItems(defensiveBuildings, defensiveBuildingCount),
            ...getRandomUniqueItems(defensiveTroops, defensiveTroopCount),
            ...getRandomUniqueItems(antiSwarmSpells, antiSwarmSpellCount),
            ...getRandomUniqueItems(damageSpell, damageSpellCount),
            ...getRandomUniqueItems(supportTroops, supportTroopCount),
        ]
    }
}

function getRandomUniqueItems<T>(arr: T[], count: number): T[] {
    let shuffledArray = [...arr]; // Clone the array to not mutate the original
    let m = shuffledArray.length;
    let t: T;
    let i: number;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = shuffledArray[m];
        shuffledArray[m] = shuffledArray[i];
        shuffledArray[i] = t;
    }

    // Get sub-array of first n elements after shuffled
    return shuffledArray.slice(0, count);
}
