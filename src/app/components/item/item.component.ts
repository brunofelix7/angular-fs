import { Item } from '../../models/Item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public items: Item[];
  public itemToEdit: Item;
  public editState: boolean;

  constructor(private itemService: ItemService) { 
    this.editState = false;
  }

  ngOnInit() {
    this.itemService.getItems().subscribe(itemsResponse => {
      this.items = itemsResponse;
    });
  }

  deleteItem(event, item: Item){
    this.itemService.deleteItem(item);
  }

  editItem(event, item: Item){
    if(this.editState === false){
      this.editState = true;      
    }else{
      this.editState = false;
    }
    this.itemToEdit = item;
  }

  updateItem(item: Item){
    this.itemService.updateItem(item);
    this.editState = false;
  }

}
