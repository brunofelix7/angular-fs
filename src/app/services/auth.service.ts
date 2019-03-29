import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { Auth } from '../models/auth';

@Injectable()
export class AuthService {

	user: User;

	constructor(private myAuth: AngularFireAuth, private router: Router) {
		this.myAuth.authState.subscribe(user => {
			if (user) {
				this.user = user;
				localStorage.setItem('user', JSON.stringify(this.user));
				this.router.navigate(['/items']);
			} else {
				localStorage.setItem('user', null);
			}
		})
	}

	isLoggedIn() {
		return JSON.parse(localStorage.getItem('user')) !== null;
	}

	async login(user: Auth) {
		return await this.myAuth.auth.signInWithEmailAndPassword(user.email, user.password);
	}

	async loginWithGoogle(){
		await this.myAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
		this.router.navigate(['/items']);
	}

	async register(email: string, password: string) {
		var result = await this.myAuth.auth.createUserWithEmailAndPassword(email, password)
	}

	async sendEmailVerification() {
		await this.myAuth.auth.currentUser.sendEmailVerification()
		this.router.navigate(['/verify-email']);
	}

	async sendPasswordResetEmail(passwordResetEmail: string) {
		return await this.myAuth.auth.sendPasswordResetEmail(passwordResetEmail);
	}

	async logout() {
		await this.myAuth.auth.signOut();
		localStorage.removeItem('user');
		this.router.navigate(['/login']);
	}

}
