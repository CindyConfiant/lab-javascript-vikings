// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {
    let chosenSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let chosenViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attackScore = chosenSaxon.receiveDamage(chosenViking.strength);
    if (chosenSaxon.health <= 0) {
      this.saxonArmy.shift(chosenSaxon);
    }
    return attackScore;
  }

  saxonAttack() {
    let chosenSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let chosenViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let attackScore = chosenViking.receiveDamage(chosenSaxon.strength);
    if (chosenViking.health <= 0) {
      this.vikingArmy.shift(chosenViking);
    }
    return attackScore;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return `Vikings have won the war of the century!`;
    } else if (this.vikingArmy.length === 0) {
      return `Saxons have fought for their lives and survived another day...`;
    } else {
      return `Vikings and Saxons are still in the thick of battle.`;
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
