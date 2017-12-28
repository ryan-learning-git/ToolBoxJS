export class ListItemModel {

  public completedBy: number;
  public completedDateTime: Date;


  constructor(private id, private listID: number, private itemID: number, private itemQuantity: number,
              private addedBy: number, private addedDateTime: Date, private deadline: Date) {
  }

}
