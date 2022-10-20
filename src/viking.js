// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(dmg) {
    this.health = this.health - dmg;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(dmg) {
    this.health = this.health - dmg;
    if (this.health > 0) {
      return `${this.name} has received ${dmg} points of damage`;
    }
    return `${this.name} has died in act of combat`;
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(dmg) {
    this.health = this.health - dmg;
    if (this.health > 0) {
      return `A Saxon has received ${dmg} points of damage`;
    }
    return `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    let randSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let result = randSaxon.receiveDamage(randViking.strength);

    if (result === `A Saxon has died in combat`) {
      this.saxonArmy.splice(this.saxonArmy.indexOf(randSaxon), 1);
    }
    return result;
  }
  saxonAttack() {
    let randSaxon =
      this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
    let randViking =
      this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];

    let result = randViking.receiveDamage(randSaxon.strength);

    if (result === `${randViking.name} has died in act of combat`) {
      this.vikingArmy.splice(this.vikingArmy.indexOf(randViking), 1);
    }
    return result;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
