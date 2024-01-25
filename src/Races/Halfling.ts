import Race from './Race';

class Halfling extends Race {
  private _life = 60;
  private static _instaces = 0;
  
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Halfling._instaces += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  static createdRacesInstances():number {
    return Halfling._instaces;
  }
}

export default Halfling;