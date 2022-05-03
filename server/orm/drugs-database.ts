import { Drug } from "./types";
import { default as data} from '../data/dataset.json';
export class DrugsDatabase {
  private allDrugs: Array<Drug> = [];
  public constructor(jsonPath: string) {
  }

  public connect() : void {
    //load json into memory
    this.allDrugs = data.drugs;
  }

  public get(id: string) : Drug{
    const drug = this.allDrugs.find(drug => {return drug.id === id});

    if(drug === undefined) {
      throw new Error(`Can't find drug with id: ${id}`);
    }

    return drug;
  }

  public search(searchTerm: string): Array<Drug> {
    if(searchTerm === '') {
      throw new Error ('Must include a search term');
    }

    const results = this.allDrugs.filter(drug => {
      return drug.name.toUpperCase().includes(searchTerm.toUpperCase()) || this.searchMatchesDisease(drug, searchTerm);
    })
    return results;
  }

  private searchMatchesDisease(drug: Drug, searchTerm: string) : boolean {
    let found = false;
    drug.diseases.forEach(disease => {
      if(disease.toUpperCase().includes(searchTerm.toUpperCase())) {
        found = true;
        return;
      }
    })
    return found;
  }
}