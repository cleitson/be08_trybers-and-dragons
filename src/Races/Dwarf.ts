import Race from './Race';

class Dwarf extends Race {
  private _life = 80;
  private static instaces = 0;
  
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Dwarf.instaces += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  static createdRacesInstances():number {
    return this.instaces;
  }
}

export default Dwarf;