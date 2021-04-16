



//const HQUnit = [];

const EliteUnit = [

  ConteptorDreadnought
];

const BattleLineUnit = [

  Intercessor,
  //IntercessorSergeant,
  AssaultIntercessor,
  //AssaultIntercessorSergeant,
  HeavyIntercessor,
  //HeavyIntercessorSergeant
  Infiltrator,
];

//const FireSupportUnit = [];

//const VeichleUnit = [];

//const FastAttackUnit = {};


function getRandomModel() {
  randomNumber = Math.floor(Math.random() * BattleLineUnit.length);
  model = BattleLineUnit[randomNumber];
  return model;
}

function updateFeaturedModel() {
  featuredModel = getRandomModel();

  nameTag = document.getElementById("name");
  nameTag.textContent = model["name"];

  descriptionTag = document.getElementById("description");
  descriptionTag.textContent = model["description"];
}

updateFeaturedModel();
