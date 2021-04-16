const Intercessor = {
  "name": "Intercessor",
  "cost": 20,
  "stats": {
    "movement": 6,
    "weapon-skill": 3,
    "balistic-skill": 3,
    "strength": 4,
    "toughness": 4,
    "wounds": 2,
    "attacks": 2,
    "leadership": 7,
    "saving-throw": 3,
  },
  "model-type": "BattleLineUnit",
  "kewwords": ["INFANTRY","PRIMARIS","INTERCESSOR SQUAD"],
  "abilities": ["And They Shall Know No Fear"],
  "max-squad-size": 10,
  "weapons-list":
  ["Bolt Pistol","Bolt Rifle","Auto Bolt Rifle","Stalker Bolt Rifle","Auxiliary Grenade Launcher"],
  "description": "Inercessors are A solid choice for A Battle Line Unit as They are the Primaris equivilent of a Tactical marine"

};
const IntercessorSergeant = {
  "name": "Intercessor Sergeant",
      "cost": 20,
  "stats": {
    "movement": 6,
    "weapon-skill": 3,
    "balistic-skill": 3,
    "strength": 4,
    "toughness": 4,
    "wounds": 2,
    "attacks": 3,
    "leadership": 8,
    "saving-throw": 3,
  },
  "model-type": "BattleLineUnit",
  "kewwords": ["INFANTRY","PRIMARIS","INTERCESSOR SQUAD"],
  "abilities": ["And They Shall Know No Fear"],
  "max-squad-size": 10,
  "weapons-list":
  ["Bolt Pistol","Bolt Rifle","Auto Bolt Rifle","Stalker Bolt Rifle","Never Gonna Give You Up, Never Gonna Let You Down, Never Gonna Run Around And Desert you"]

};
const AssaultIntercessor = {
  "name": "Assault Intercessor",
  "cost": 19,
  "movement": 6,
  "weapon-skill": 3,
  "balistic-skill": 3,
  "strength": 4,
  "toughness": 4,
  "wounds": 2,
  "attacks": 2,
  "leadership": 7,
  "saving-throw": 3,
  "model-type": "BattleLineUnit",
  "weapons-list": [
    "Bolt Pistol",
    "Bolt Gun",
    "Chain Sword",
    "Thunder Hammer",
    "Power Sword"
  ],
  "abilities": ["And They Shall Know No Fear"],
  "description": "Assault Intercessors are amongst the most widespread close support units in a Chapters arsenal. Firing their heavy bolt pistols as they close upon the foe, they charge into the fray, where they make short work of their enemies with brutal swings of their chainswords"
};
const AssaultIntercessorSergeant = {
  "name": "Assault Intercessor Sergeant",
  "cost": 19,
  "movement": 6,
  "weapon-skill": 3,
  "balistic-skill": 3,
  "strength": 4,
  "toughness": 4,
  "wounds": 2,
  "attacks": 3,
  "leadership": 8,
  "saving-throw": 3,
  "model-type": "BattleLineUnit",
  "weapons-list": [
    "Bolt Pistol",
    "Bolt Gun",
    "Chain Sword",
    "Thunder Hammer",
    "Power Sword"
  ],
  "abilities": ["And They Shall Know No Fear"],
};

const HeavyIntercessor = {
  "name": "Heavy Intercessor",
  "cost": 28,
  "movement": 6,
  "weapon-skill": 3,
  "balistic-skill": 3,
  "strength": 4,
  "toughness": 5,
  "wounds": 3,
  "attacks": 2,
  "leadership": 7,
  "saving-throw": 3,
  "model-type": "BattleLineUnit",
  "weapons-list": [
    "Heavy Bolt Rifle",
    "Executer Bolt Rifle",
    "HellStorm Bolt Rifle"
  ],
  "abilities": ["Angels of death", " Combat squads"],
  "description": "Heavy Intercessors are A perfect fire support unit and are the Primaris equivilent of devistator marines"
};
const HeavyIntercessorSergeant = {
  "name": "Heavy Intercessor Sergeant",
  "cost": 28,
  "movement": 6,
  "weapon-skill": 3,
  "balistic-skill": 3,
  "strength": 4,
  "toughness": 5,
  "wounds": 3,
  "attacks": 3,
  "leadership": 8,
  "saving-throw": 3,
  "model-type": "BattleLineUnit",
  "weapons-list": [
    "Heavy Bolt Rifle",
    "Executer Bolt Rifle",
    "HellStorm Bolt Rifle",
    "Heavy Bolter",
    "Executer Heavy Bolter",
    "HellStorm Heavy Bolter"
  ],
  "abilities": ["Angels of death", " Combat squads"],
};
const Infiltrator = {
  "name": "Infiltrator",
  "cost": 24,
  "movement": 6,
  "weapon-skill": 3,
  "balistic-skill": 3,
  "strength": 4,
  "toughness": 4,
  "wounds": 2,
  "attacks": 2,
  "leadership": 7,
  "saving-throw": 3,
  "model-type": "BattleLineUnit",
  "weapons-list": [
    "Bolt Pistol",
    "Marksman Bolt Carbine",
  ],
  "abilities": ["Angels of death", "Concealed Positions", " Combat squads"],
  "description": "infiltrators are a very useful unit for preventing enemy reinforcments and for some additional fire support"
};
const ConteptorDreadnought = {
  "name": "Conteptor Dreadnought",
  "cost": 150,
  "stats": {  "movement": 8,
    "weapon-skill": 3,
    "balistic-skill": 3,
    "strength": 7,
    "toughness": 7,
    "wounds": 9,
    "attacks": 4,
    "leadership": 8,
    "saving-throw": 3,
  },
  "model-type": "EliteUnit",
  "weapons-list": [
    "Combi-Bolter",
    "Kheres-Pattern Assault Cannon",
    "Multi-Melta",
    "Dreadnought Combat Weapon"
  ]
};
const Scout = {
  "name": "Scout",
  "cost": 14,
  "stats": {
    "movement": 6,
    "weapon-skill": 3,
    "balistic-skill": 3,
    "strength": 4,
    "toughness": 4,
    "wounds": 1,
    "attacks": 1,
    "leadership": 7,
    "saving-throw": 3,
  }

};
const ScoutSergeant = {
  "name": "Scout Sergeant",
  "cost": 14,
  "stats": {
    "movement": 6,
    "weapon-skill": 3,
    "balistic-skill": 3,
    "strength": 4,
    "toughness": 4,
    "wounds": 1,
    "attacks": 2,
    "leadership": 8,
    "saving-throw": 3,

  }

};
const Eradicator = {
  "name": "Eradicator",
  "cost": 40,
  "stats": {
    "movement": 6,
    "weapon-skill": 3,
    "balistic-skill": 3,
    "strength": 4,
    "toughness": 5,
    "wounds": 3,
    "attacks": 2,
    "leadership": 7,
    "saving-throw": 3,
  }
}
const EradicatorSergeant = {
  "name": "Eradicator Sergeant",
  "cost": 40,
  "stats": {
    "movement": 6,
    "weapon-skill": 3,
    "balistic-skill": 3,
    "strength": 4,
    "toughness": 5,
    "wounds": 3,
    "attacks": 3,
    "leadership": 8,
    "saving-throw": 3,
  }
}
