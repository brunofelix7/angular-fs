import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { ItemService } from '../../services/item.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-items',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

	public items: Item[];
	public itemToEdit: Item;
	public editState: boolean;

	constructor(private itemService: ItemService, private authService: AuthService, private router: Router) {
		this.editState = false;
	}

	ngOnInit() {
		if(!this.authService.isLoggedIn()){
			this.router.navigate(['/login']);
			return;
		}
		this.itemService.getItems().subscribe(itemsResponse => {
			this.items = itemsResponse;
		});
	}

	deleteItem(event, item: Item) {
		this.itemService.deleteItem(item);
	}

	editItem(event, item: Item) {
		if (this.editState === false) {
			this.editState = true;
		} else {
			this.editState = false;
		}
		this.itemToEdit = item;
	}

	updateItem(item: Item) {
		this.itemService.updateItem(item);
		this.editState = false;
	}

}
