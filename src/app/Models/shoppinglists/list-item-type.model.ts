export class ListItemTypeModel {

  public id: number;
  public name: string;
  public quantityPrefix: string;
  public quantitySuffix: string;

  constructor (id: number, name: string, quantityPrefix: string, quantitySuffix: string){
    this.id = id;
    this.name = name;
    this.quantityPrefix = quantityPrefix;
    this.quantitySuffix = quantitySuffix;
  }

}
