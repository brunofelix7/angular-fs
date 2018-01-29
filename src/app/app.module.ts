/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* Firebase Modules */
import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

/* Components */
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';

/* Services */
import { ItemService } from './services/item.service';

@NgModule({
  declarations: [ AppComponent, ItemComponent, NavbarComponent, AddItemComponent ],
  imports: [ BrowserModule, FormsModule, AngularFirestoreModule, AngularFireModule.initializeApp(environment.firebase, 'angular-fs') ],
  providers: [ ItemService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { 

}
