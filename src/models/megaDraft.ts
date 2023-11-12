import * as cards from './cards'

export interface MegaDraft {
    cards: cards.Card[],
}

function isCard(object: any): object is cards.Card {
    return 'classification' in object;
}

const misc: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.Misc
)

const cycle: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.Cycle
)

const swarm: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.Swarm
)

const champions: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.Champion
)

const aoe: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.AoE
)

const winConditions: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.WinCondition
)

const tankKillers: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.TankKiller
)

const defensiveBuildings: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.DefensiveBuilding
)

const defensiveTroops: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.DefensiveTroop
)

const antiSwarmSpells: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.AntiSwarmSpell
)

const damageSpell: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.DamageSpell
)

const supportTroops: cards.Card[] = Object.values(cards).filter(
    (card): card is cards.Card => isCard(card) && card.classification === cards.Classifications.SupportTroop
)

const miscCount = 1;
const tankKillerCount = 2;
const antiSwarmSpellCount = 2;
const championCount = 3;
const cycleCount = 2;
const aoeCount = 4;
const WinConditionCount = 4;
const swarmCount = 4;
const defensiveBuildingCount = 4;
const defensiveTroopCount = 4;
const damageSpellCount = 2;
const supportTroopCount = 4;

export function createMegaDraft(useChamptions = true): MegaDraft {
    let manipulatedMisc = miscCount;
    let manipulatedChamp = championCount;
    let manipulatedTankKiller = tankKillerCount;
    let manipulatedAntiSwarm = antiSwarmSpellCount;
    if (!useChamptions) {
        manipulatedMisc += 1;
        manipulatedChamp = 0;
        manipulatedTankKiller += 1;
        manipulatedAntiSwarm += 1;
    }
    return {
        cards: [
            ...getRandomUniqueItems(misc, manipulatedMisc),
            ...getRandomUniqueItems(champions, manipulatedChamp),
            ...getRandomUniqueItems(cycle, cycleCount),
            ...getRandomUniqueItems(aoe, aoeCount),
            ...getRandomUniqueItems(winConditions, WinConditionCount),
            ...getRandomUniqueItems(swarm, swarmCount),
            ...getRandomUniqueItems(tankKillers, manipulatedTankKiller),
            ...getRandomUniqueItems(defensiveBuildings, defensiveBuildingCount),
            ...getRandomUniqueItems(defensiveTroops, defensiveTroopCount),
            ...getRandomUniqueItems(antiSwarmSpells, manipulatedAntiSwarm),
            ...getRandomUniqueItems(damageSpell, damageSpellCount),
            ...getRandomUniqueItems(supportTroops, supportTroopCount),
        ]
    }
}

function getRandomUniqueItems<T>(arr: T[], count: number): T[] {
    if (count == 0) return []
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
