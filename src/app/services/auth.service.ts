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
				localStorage.setItem('user_firebase', JSON.stringify(this.user));
			} else {
				localStorage.setItem('user_firebase', null);
			}
		})
	}

	login(user: Auth) {
		this.myAuth.auth.signInWithEmailAndPassword(user.email, user.password)
			.then(response => {
				this.router.navigate(['/items']);
			}).catch(error => {
				console.log('Something went wrong:', error.message);
				return false;
			});
		return false;
	}

	signup(user: Auth) {
		this.myAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
			.then(response => {
				console.log('Success!', response);
			}).catch(error => {
				console.log('Something went wrong:', error.message);
			});
	}

	logout() {
		this.myAuth.auth.signOut();
		localStorage.removeItem('user_firebase');
		this.router.navigate(['/login']);
	}

	loginWithGoogle() {
		this.myAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
		this.router.navigate(['/items']);
	}

	isLoggedIn() {
		return JSON.parse(localStorage.getItem('user_firebase')) !== null;
	}

	sendEmailVerification() {
		this.myAuth.auth.currentUser.sendEmailVerification()
	}

	sendPasswordResetEmail(passwordResetEmail: string) {
		this.myAuth.auth.sendPasswordResetEmail(passwordResetEmail);
	}

}
