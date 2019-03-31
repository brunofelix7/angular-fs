/* Modules */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Firebase Modules */
import { environment } from '../environments/environment.prod';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

/** Routing */
import { AppRouting } from './app.routing';

/* Components */
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { LoginComponent } from './components/login/login.component';

/* Services */
import { ItemService } from './services/item.service';
import { AuthService } from './services/auth.service';

@NgModule({
	declarations: [
		AppComponent,
		ItemComponent,
		NavbarComponent,
		AddItemComponent,
		LoginComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AppRouting,
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireModule.initializeApp(environment.firebase, 'angular-fs')],
	providers: [ ItemService, AuthService ],
	bootstrap: [ AppComponent ]
})
export class AppModule {

}
