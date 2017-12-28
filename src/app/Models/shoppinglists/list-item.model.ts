export class ListItemModel {

  private _completedBy: number;
  private _completedDateTime: Date;


  constructor(private _id, private _listID: number, private _itemID: number, private _itemQuantity: number,
              private _addedBy: number, private _addedDateTime: Date, private _deadline: Date) {
  }


  get id() {
    return this._id;
  }

  get listID(): number {
    return this._listID;
  }

  get itemID(): number {
    return this._itemID;
  }

  get itemQuantity(): number {
    return this._itemQuantity;
  }

  get addedBy(): number {
    return this._addedBy;
  }

  get addedDateTime(): Date {
    return this._addedDateTime;
  }

  get deadline(): Date {
    return this._deadline;
  }


  get completedBy(): number {
    return this._completedBy;
  }

  get completedDateTime(): Date {
    return this._completedDateTime;
  }
}
