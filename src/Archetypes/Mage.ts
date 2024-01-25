import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

class Mage extends ArcheType {
  private static instances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    Mage.instances += 1;
  }

  get energyType() {
    return this._energyType;
  }

  static createdArchetypeInstances():number {
    return this.instances;
  }
}

export default Mage;