import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  firebaseAuth = inject(Auth)

  login(email: string, password: string) : Observable<any>{
    const promise = signInWithEmailAndPassword(this.firebaseAuth, email, password);

    return from(promise);
  }

  register(email: string, password: string) : Observable<any>{
    const promise = createUserWithEmailAndPassword(this.firebaseAuth, email, password);

    return from(promise);
  }

  // async logout(): Promise<void> {
  //   return await this.afAuth.signOut();
  // }

  // getUser() {
  //   return this.afAuth.authState;
  // }
}
