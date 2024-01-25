import Race from './Race';

class Orc extends Race {
  private _life = 74;
  private static _instaces = 0;
  
  constructor(name:string, dexterity:number) {
    super(name, dexterity);
    Orc._instaces += 1;
  }

  get maxLifePoints(): number {
    return this._life;
  }

  static createdRacesInstances():number {
    return Orc._instaces;
  }
}

export default Orc;