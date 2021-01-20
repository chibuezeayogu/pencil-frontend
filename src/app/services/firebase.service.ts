import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public afAuth: AngularFireAuth, public router: Router, private toastr: ToastrService) {}

  async googleSignin() {
    await this.authLogin(new firebase.auth.GoogleAuthProvider())
  }

  async facebookSignin() {
    await this.authLogin(new firebase.auth.FacebookAuthProvider())
  }

  async authLogin(provider){
    try {
      const credential = await this.afAuth.signInWithPopup(provider);
      localStorage.setItem('uid', credential.user.uid)
      this.router.navigate(['/dashboard']);
    } catch(err) {
      this.toastr.error('There was an error logging in. Please try again.')
    }
  }

  async signOut() {
    await this.afAuth.signOut();
    localStorage.removeItem('uid')
    this.router.navigate(['/login']);
  }

  get isSignedIn(): boolean {
    let uid = localStorage.getItem('uid');
    return (uid === null || uid.trim() === "") ? false : true
  }
}
