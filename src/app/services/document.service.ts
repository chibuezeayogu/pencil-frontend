import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(public firestore: AngularFirestore, public router: Router) { }

  getUserDocument() {
   return this.documentRef().get()
  }

  createUserDocument() {
    this.documentRef().set({ text: ""});
  }

  updateUserDocument(data: string): void {
    this.documentRef().update({ text: data });
  }

  documentRef(){
    const uid = this.getUserUid() 
    return this.firestore.collection('documents').doc(uid)
  }

  getUserUid() {
    let uid = localStorage.getItem('uid');
    if(uid === null || uid.trim() === "") {
      this.router.navigate(['login']);
    } else {
      return uid.toString();
    }
  }
}
