import * as generated from './generated/generated';

export enum Classifications {
    Cycle,
    Swarm,
    WinCondition,
    Champion,
    TankKiller,
    AoE,
    DefensiveBuilding,
    AntiSwarmSpell,
    DamageSpell,
    DefensiveTroop,
    SupportTroop,
    // funny spells
    Misc,
}

export interface Card {
    name: string,
    id: number,
    iconUrl: string,
    elixirCost: number,
    classification: Classifications,
}

export const Knight: Card = {
    iconUrl: generated.Knight.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DefensiveTroop,
    ...generated.Knight
};

export const Archers: Card = {
    iconUrl: generated.Archers.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.SupportTroop,
    ...generated.Archers
};

export const Goblins: Card = {
    iconUrl: generated.Goblins.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.Swarm,
    ...generated.Goblins
};

export const Giant: Card = {
    iconUrl: generated.Giant.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.WinCondition,
    ...generated.Giant
};

export const PEKKA: Card = {
    iconUrl: generated.PEKKA.iconUrls.medium,
    elixirCost: 7,
    classification: Classifications.WinCondition,
    ...generated.PEKKA
};

export const Minions: Card = {
    iconUrl: generated.Minions.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DefensiveTroop,
    ...generated.Minions
};

export const Balloon: Card = {
    iconUrl: generated.Balloon.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.WinCondition,
    ...generated.Balloon
};

export const Witch: Card = {
    iconUrl: generated.Witch.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.AoE,
    ...generated.Witch
};

export const Barbarians: Card = {
    iconUrl: generated.Barbarians.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.Swarm,
    ...generated.Barbarians
};

export const Golem: Card = {
    iconUrl: generated.Golem.iconUrls.medium,
    elixirCost: 8,
    classification: Classifications.WinCondition,
    ...generated.Golem
};

export const Skeletons: Card = {
    iconUrl: generated.Skeletons.iconUrls.medium,
    elixirCost: 1,
    classification: Classifications.Cycle,
    ...generated.Skeletons
};

export const Valkyrie: Card = {
    iconUrl: generated.Valkyrie.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.AoE,
    ...generated.Valkyrie
};

export const SkeletonArmy: Card = {
    iconUrl: generated.SkeletonArmy.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.Swarm,
    ...generated.SkeletonArmy
};

export const Bomber: Card = {
    iconUrl: generated.Bomber.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.AoE,
    ...generated.Bomber
};

export const Musketeer: Card = {
    iconUrl: generated.Musketeer.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.SupportTroop,
    ...generated.Musketeer
};

export const BabyDragon: Card = {
    iconUrl: generated.BabyDragon.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.AoE,
    ...generated.BabyDragon
};

export const Prince: Card = {
    iconUrl: generated.Prince.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.DefensiveTroop,
    ...generated.Prince
};

export const Wizard: Card = {
    iconUrl: generated.Wizard.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.SupportTroop,
    ...generated.Wizard
};

export const MiniPEKKA: Card = {
    iconUrl: generated.MiniPEKKA.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.TankKiller,
    ...generated.MiniPEKKA
};

export const SpearGoblins: Card = {
    iconUrl: generated.SpearGoblins.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.Swarm,
    ...generated.SpearGoblins
};

export const GiantSkeleton: Card = {
    iconUrl: generated.GiantSkeleton.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.DefensiveTroop,
    ...generated.GiantSkeleton
};

export const HogRider: Card = {
    iconUrl: generated.HogRider.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.WinCondition,
    ...generated.HogRider
};

export const MinionHorde: Card = {
    iconUrl: generated.MinionHorde.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.Swarm,
    ...generated.MinionHorde
};

export const IceWizard: Card = {
    iconUrl: generated.IceWizard.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.SupportTroop,
    ...generated.IceWizard
};

export const RoyalGiant: Card = {
    iconUrl: generated.RoyalGiant.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.WinCondition,
    ...generated.RoyalGiant
};

export const Guards: Card = {
    iconUrl: generated.Guards.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DefensiveTroop,
    ...generated.Guards
};

export const Princess: Card = {
    iconUrl: generated.Princess.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.AoE,
    ...generated.Princess
};

export const DarkPrince: Card = {
    iconUrl: generated.DarkPrince.iconUrls.medium,
    elixirCost: 0,
    classification: Classifications.AoE,
    ...generated.DarkPrince
};

export const ThreeMusketeers: Card = {
    iconUrl: generated.ThreeMusketeers.iconUrls.medium,
    elixirCost: 9,
    classification: Classifications.WinCondition,
    ...generated.ThreeMusketeers
};

export const LavaHound: Card = {
    iconUrl: generated.LavaHound.iconUrls.medium,
    elixirCost: 7,
    classification: Classifications.WinCondition,
    ...generated.LavaHound
};

export const IceSpirit: Card = {
    iconUrl: generated.IceSpirit.iconUrls.medium,
    elixirCost: 1,
    classification: Classifications.Cycle,
    ...generated.IceSpirit
};

export const FireSpirit: Card = {
    iconUrl: generated.FireSpirit.iconUrls.medium,
    elixirCost: 1,
    classification: Classifications.Cycle,
    ...generated.FireSpirit
};

export const Miner: Card = {
    iconUrl: generated.Miner.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.WinCondition,
    ...generated.Miner
};

export const Sparky: Card = {
    iconUrl: generated.Sparky.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.TankKiller,
    ...generated.Sparky
};

export const Bowler: Card = {
    iconUrl: generated.Bowler.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.AoE,
    ...generated.Bowler
};

export const Lumberjack: Card = {
    iconUrl: generated.Lumberjack.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.TankKiller,
    ...generated.Lumberjack
};

export const BattleRam: Card = {
    iconUrl: generated.BattleRam.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.WinCondition,
    ...generated.BattleRam
};

export const InfernoDragon: Card = {
    iconUrl: generated.InfernoDragon.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.TankKiller,
    ...generated.InfernoDragon
};

export const IceGolem: Card = {
    iconUrl: generated.IceGolem.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.DefensiveTroop,
    ...generated.IceGolem
};

export const MegaMinion: Card = {
    iconUrl: generated.MegaMinion.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DefensiveTroop,
    ...generated.MegaMinion
};

export const DartGoblin: Card = {
    iconUrl: generated.DartGoblin.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.SupportTroop,
    ...generated.DartGoblin
};

export const GoblinGang: Card = {
    iconUrl: generated.GoblinGang.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.Swarm,
    ...generated.GoblinGang
};

export const ElectroWizard: Card = {
    iconUrl: generated.ElectroWizard.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.SupportTroop,
    ...generated.ElectroWizard
};

export const EliteBarbarians: Card = {
    iconUrl: generated.EliteBarbarians.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.WinCondition,
    ...generated.EliteBarbarians
};

export const Hunter: Card = {
    iconUrl: generated.Hunter.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.TankKiller,
    ...generated.Hunter
};

export const Executioner: Card = {
    iconUrl: generated.Executioner.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.AoE,
    ...generated.Executioner
};

export const Bandit: Card = {
    iconUrl: generated.Bandit.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DefensiveTroop,
    ...generated.Bandit
};

export const RoyalRecruits: Card = {
    iconUrl: generated.RoyalRecruits.iconUrls.medium,
    elixirCost: 7,
    classification: Classifications.Swarm,
    ...generated.RoyalRecruits
};

export const NightWitch: Card = {
    iconUrl: generated.NightWitch.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.SupportTroop,
    ...generated.NightWitch
};

export const Bats: Card = {
    iconUrl: generated.Bats.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.Swarm,
    ...generated.Bats
};

export const RoyalGhost: Card = {
    iconUrl: generated.RoyalGhost.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DefensiveTroop,
    ...generated.RoyalGhost
};

export const RamRider: Card = {
    iconUrl: generated.RamRider.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.WinCondition,
    ...generated.RamRider
};

export const Zappies: Card = {
    iconUrl: generated.Zappies.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.DefensiveTroop,
    ...generated.Zappies
};

export const Rascals: Card = {
    iconUrl: generated.Rascals.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.DefensiveTroop,
    ...generated.Rascals
};

export const CannonCart: Card = {
    iconUrl: generated.CannonCart.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.DefensiveTroop,
    ...generated.CannonCart
};

export const MegaKnight: Card = {
    iconUrl: generated.MegaKnight.iconUrls.medium,
    elixirCost: 7,
    classification: Classifications.AoE,
    ...generated.MegaKnight
};

export const SkeletonBarrel: Card = {
    iconUrl: generated.SkeletonBarrel.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.WinCondition,
    ...generated.SkeletonBarrel
};

export const FlyingMachine: Card = {
    iconUrl: generated.FlyingMachine.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.SupportTroop,
    ...generated.FlyingMachine
};

export const WallBreakers: Card = {
    iconUrl: generated.WallBreakers.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.Swarm,
    ...generated.WallBreakers
};

export const RoyalHogs: Card = {
    iconUrl: generated.RoyalHogs.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.WinCondition,
    ...generated.RoyalHogs
};

export const GoblinGiant: Card = {
    iconUrl: generated.GoblinGiant.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.WinCondition,
    ...generated.GoblinGiant
};

export const Fisherman: Card = {
    iconUrl: generated.Fisherman.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DefensiveTroop,
    ...generated.Fisherman
};

export const MagicArcher: Card = {
    iconUrl: generated.MagicArcher.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.SupportTroop,
    ...generated.MagicArcher
};

export const ElectroDragon: Card = {
    iconUrl: generated.ElectroDragon.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.SupportTroop,
    ...generated.ElectroDragon
};

export const Firecracker: Card = {
    iconUrl: generated.Firecracker.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.AoE,
    ...generated.Firecracker
};

export const MightyMiner: Card = {
    iconUrl: generated.MightyMiner.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.Champion,
    ...generated.MightyMiner
};

export const ElixirGolem: Card = {
    iconUrl: generated.ElixirGolem.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.WinCondition,
    ...generated.ElixirGolem
};

export const BattleHealer: Card = {
    iconUrl: generated.BattleHealer.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.DefensiveTroop,
    ...generated.BattleHealer
};

export const SkeletonKing: Card = {
    iconUrl: generated.SkeletonKing.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.Champion,
    ...generated.SkeletonKing
};

export const ArcherQueen: Card = {
    iconUrl: generated.ArcherQueen.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.Champion,
    ...generated.ArcherQueen
};

export const GoldenKnight: Card = {
    iconUrl: generated.GoldenKnight.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.Champion,
    ...generated.GoldenKnight
};

export const Monk: Card = {
    iconUrl: generated.Monk.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.Champion,
    ...generated.Monk
};

export const SkeletonDragons: Card = {
    iconUrl: generated.SkeletonDragons.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.SupportTroop,
    ...generated.SkeletonDragons
};

export const MotherWitch: Card = {
    iconUrl: generated.MotherWitch.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.SupportTroop,
    ...generated.MotherWitch
};

export const ElectroSpirit: Card = {
    iconUrl: generated.ElectroSpirit.iconUrls.medium,
    elixirCost: 1,
    classification: Classifications.Cycle,
    ...generated.ElectroSpirit
};

export const ElectroGiant: Card = {
    iconUrl: generated.ElectroGiant.iconUrls.medium,
    elixirCost: 7,
    classification: Classifications.WinCondition,
    ...generated.ElectroGiant
};

export const Phoenix: Card = {
    iconUrl: generated.Phoenix.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.DefensiveTroop,
    ...generated.Phoenix
};

export const LittlePrince: Card = {
    iconUrl: generated.LittlePrince.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.Champion,
    ...generated.LittlePrince
};

export const Cannon: Card = {
    iconUrl: generated.Cannon.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DefensiveBuilding,
    ...generated.Cannon
};

export const GoblinHut: Card = {
    iconUrl: generated.GoblinHut.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.DefensiveBuilding,
    ...generated.GoblinHut
};

export const Mortar: Card = {
    iconUrl: generated.Mortar.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.WinCondition,
    ...generated.Mortar
};

export const InfernoTower: Card = {
    iconUrl: generated.InfernoTower.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.DefensiveBuilding,
    ...generated.InfernoTower
};

export const BombTower: Card = {
    iconUrl: generated.BombTower.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.DefensiveBuilding,
    ...generated.BombTower
};

export const BarbarianHut: Card = {
    iconUrl: generated.BarbarianHut.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.DefensiveBuilding,
    ...generated.BarbarianHut
};

export const Tesla: Card = {
    iconUrl: generated.Tesla.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.DefensiveBuilding,
    ...generated.Tesla
};

export const ElixirCollector: Card = {
    iconUrl: generated.ElixirCollector.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.DefensiveBuilding,
    ...generated.ElixirCollector
};

export const XBow: Card = {
    iconUrl: generated.XBow.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.WinCondition,
    ...generated.XBow
};

export const Tombstone: Card = {
    iconUrl: generated.Tombstone.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DefensiveBuilding,
    ...generated.Tombstone
};

export const Furnace: Card = {
    iconUrl: generated.Furnace.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.DefensiveBuilding,
    ...generated.Furnace
};

export const GoblinCage: Card = {
    iconUrl: generated.GoblinCage.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.DefensiveBuilding,
    ...generated.GoblinCage
};

export const GoblinDrill: Card = {
    iconUrl: generated.GoblinDrill.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.WinCondition,
    ...generated.GoblinDrill
};

export const Fireball: Card = {
    iconUrl: generated.Fireball.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.DamageSpell,
    ...generated.Fireball
};

export const Arrows: Card = {
    iconUrl: generated.Arrows.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.AntiSwarmSpell,
    ...generated.Arrows
};

export const Rage: Card = {
    iconUrl: generated.Rage.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.Misc,
    ...generated.Rage
};

export const Rocket: Card = {
    iconUrl: generated.Rocket.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.DamageSpell,
    ...generated.Rocket
};

export const GoblinBarrel: Card = {
    iconUrl: generated.GoblinBarrel.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.WinCondition,
    ...generated.GoblinBarrel
};

export const Freeze: Card = {
    iconUrl: generated.Freeze.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.Misc,
    ...generated.Freeze
};

export const Mirror: Card = {
    iconUrl: generated.Mirror.iconUrls.medium,
    elixirCost: 0,
    classification: Classifications.Misc,
    ...generated.Mirror
};

export const Lightning: Card = {
    iconUrl: generated.Lightning.iconUrls.medium,
    elixirCost: 6,
    classification: Classifications.DamageSpell,
    ...generated.Lightning
};

export const Zap: Card = {
    iconUrl: generated.Zap.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.AntiSwarmSpell,
    ...generated.Zap
};

export const Poison: Card = {
    iconUrl: generated.Poison.iconUrls.medium,
    elixirCost: 4,
    classification: Classifications.AntiSwarmSpell,
    ...generated.Poison
};

export const Graveyard: Card = {
    iconUrl: generated.Graveyard.iconUrls.medium,
    elixirCost: 5,
    classification: Classifications.WinCondition,
    ...generated.Graveyard
};

export const TheLog: Card = {
    iconUrl: generated.TheLog.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.AntiSwarmSpell,
    ...generated.TheLog
};

export const Tornado: Card = {
    iconUrl: generated.Tornado.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.AntiSwarmSpell,
    ...generated.Tornado
};

export const Clone: Card = {
    iconUrl: generated.Clone.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.Misc,
    ...generated.Clone
};

export const Earthquake: Card = {
    iconUrl: generated.Earthquake.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.DamageSpell,
    ...generated.Earthquake
};

export const BarbarianBarrel: Card = {
    iconUrl: generated.BarbarianBarrel.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.AntiSwarmSpell,
    ...generated.BarbarianBarrel
};

export const HealSpirit: Card = {
    iconUrl: generated.HealSpirit.iconUrls.medium,
    elixirCost: 1,
    classification: Classifications.Cycle,
    ...generated.HealSpirit
};

export const RoyalDelivery: Card = {
    iconUrl: generated.RoyalDelivery.iconUrls.medium,
    elixirCost: 3,
    classification: Classifications.AoE,
    ...generated.RoyalDelivery
};

export const Snowball: Card = {
    iconUrl: generated.GiantSnowball.iconUrls.medium,
    elixirCost: 2,
    classification: Classifications.AntiSwarmSpell,
    ...generated.GiantSnowball
}