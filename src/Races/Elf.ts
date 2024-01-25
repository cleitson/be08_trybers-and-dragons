import Race from './Race';

class Elf extends Race {
  private _life = 99;
  private static _instaces = 0;
  
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Elf._instaces += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  static createdRacesInstances():number {
    return Elf._instaces;
  }
}

export default Elf;