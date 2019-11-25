export default class Item {
  private _itemNo: number;
  private _name: string;
  private _amount: number;
  private _inventoryCode: string;

  constructor(name: string, amount: number, inventoryCode: string) {
    this.name = name;
    this.amount = amount;
    this.inventoryCode = inventoryCode;
  }

  get itemNo(): number {
    return this._itemNo;
  }

  set itemNo(value: number){
    this._itemNo = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get amount(): number {
    return this._amount;
  }

  set amount(value: number) {
    this._amount = value;
  }

  get inventoryCode(): string {
    return this._inventoryCode;
  }

  set inventoryCode(value: string) {
    this._inventoryCode = value;
  }

  toJson() {
    return {
      itemNo: this.itemNo,
      name: this.name,
      amount: this.amount,
      inventoryCode: this.inventoryCode
    };
  }
}
