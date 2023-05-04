import { Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable, BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>;
 


  constructor(private afAuth: AngularFireAuth) {
    this.user$ = this.afAuth.authState;
    
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.afAuth.signOut();
  }

  register(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  isLogin(){
    console.log(!!this.afAuth.currentUser)
    return !!this.afAuth.currentUser;
    
  }
}
