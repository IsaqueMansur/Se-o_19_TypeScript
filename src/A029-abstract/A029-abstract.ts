/* eslint no-useless-constructor: 0 */
/* eslint max-classes-per-file: ["error", 3] */

export default abstract class Character {
  protected abstract emoji: string;

  constructor(
    protected name: string,
    protected attackPower: number,
    protected defensePower: number,
    protected life: number,
  ) {}

  private static createFactorForAttack(): number {
    return (Math.random() * 1);
  }

  attack(character: Character): void {
    this.attackSound();
    character.reduceLife(this.attackPower);
  }

  reduceLife(forceOfAttack: number): void {
    console.log(`--- ${this.name} está sendo atacado ! ---`);
    this.life -= (
      forceOfAttack
      * (this.defensePower / Character.createFactorForAttack() / 5)
       * Character.createFactorForAttack());
    console.log(`${this.emoji} ${this.name} agora tem ${this.life} pontos de vida !`);
  }

  protected abstract attackSound(): void;
}

class Warrior extends Character {
  protected emoji = '\u{1F9DD}';
  attackSound(): void { //eslint-disable-line
    console.log(`${this.emoji} Warrior: Gooo to attack !!!`);
  }
}
class Monster extends Character {
  protected emoji = '\u{1F9DF}';
  attackSound(): void { //eslint-disable-line
    console.log(`${this.emoji} Monster: huahumhaum  !!!`);
  }
}

const warrior1 = new Warrior('Cleiton Rasta', 100, 80, 2000);
const monster1 = new Monster('Bixo do mato', 30, 20, 900);
warrior1.attack(monster1);
monster1.attack(warrior1);
