import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Auth } from '../../models/auth';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user: Auth;

	constructor(private authService: AuthService) {
		this.user = new Auth();
		this.user.email = 'brunofelix.dev@gmail.com';
		this.user.password = '12345';
	}

	ngOnInit() {

	}

	login() {
		//	https://www.youtube.com/watch?v=6TRv1xT3Y-E
		new Promise(
			resolve => {
				console.log(resolve.name);
				this.authService.login(this.user);
			}
		);
	}

}
