export default class Character {
  constructor(name, type) {
    if ((name.length < 2) || (name.length > 10)) {
      throw new Error('имя должно быть: min - 2 символа, max - 10');
    }
    const arr = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!arr.includes(type)) {
      throw new Error('тип должен быть один из типов: Bowman, Swordsman, Magician, Daemon, Undead, Zombie');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health <= 0) {
      throw new Error ("персонаж погиб, повысить уровень невозможно")
    }
    this.level += 1;
    this.attack = 1.2 * this.attack;
    this.defence = 1.2 * this.defence;
    this.health += 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
