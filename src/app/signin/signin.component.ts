import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public auth: FirebaseService) { }

  ngOnInit(): void {
  }

  async loginWithGoogle(){
    await this.auth.googleSignin();
  }

  async loginWithFacebook(){
    await this.auth.facebookSignin()
  }

}
