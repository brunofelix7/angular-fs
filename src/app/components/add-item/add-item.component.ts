import { Item } from '../../models/Item';
import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  public item: Item;

  constructor(private itemService: ItemService) { 
    this.item = {
      title: '',
      description: ''
    }
  }

  ngOnInit() {

  }

  /* Recebe os dados do formulario */
  onSubmit(){
    if(this.item.title != '' && this.item.title != ''){
      this.itemService.addItem(this.item);
      this.item.title = '';
      this.item.description = '';
    }
  }

}
