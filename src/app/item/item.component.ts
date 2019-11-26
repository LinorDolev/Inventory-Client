import { Component, OnInit } from '@angular/core';
import Item from './Item';
import {ItemService} from '../item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']

})

export class ItemComponent implements OnInit {

  items: Item[];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.renderItems();
  }

  renderItems() {
    this.itemService.getItems().subscribe(
      data => {
        this.items = data;
        console.log(data);
      }
    );
  }

  onAddItem(name, amount, code) {
    this.itemService.addItem(new Item(name, amount, code))
      .subscribe(() => this.renderItems());
    return false;
  }

  onDeleteItem(itemNo) {
    this.itemService.deleteItem(itemNo).subscribe(() => this.renderItems());
  }

  onDepositItem(item: Item, changeAmount: number) {
    this.itemService.depositItem(item, changeAmount).subscribe(() => this.renderItems());
  }

  onWithdrawItem(item: Item, changeAmount: number) {
    this.itemService.withdrawItem(item, changeAmount).subscribe(() => this.renderItems());
  }


}
