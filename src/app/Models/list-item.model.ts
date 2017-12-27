export class ListItemModel {

  public listID: number;
  public itemID: number;
  public itemQuantity: number;
  public addedBy: number;
  public completedBy: number;
  public addedDateTime: Date;
  public completedDateTime: Date;


  constructor(listID: number, itemID: number, itemQuantity: number, addedBy: number, addedDateTime: Date) {
    this.listID = listID;
    this.itemID = itemID;
    this.itemQuantity = itemQuantity;
    this.addedBy = addedBy;
    this.addedDateTime = addedDateTime;
  }
}
