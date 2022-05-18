import { Injectable } from '@angular/core';
import {User} from "../interfaces/user.interface";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user$:Observable<User>;
  userStatus:boolean;

  public user:User;

  constructor(public afAuth:AngularFireAuth, public afs:AngularFirestore) {
    //Puedo meterlo en un metodo aparte para que quede mejor
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }

  async resetPassword(email: string): Promise<void> {
    try {
      return this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log('Error ->', error)
    }
  }

  async register(email:string, password:string): Promise<User> {
    try {
      const { user } = await this.afAuth.createUserWithEmailAndPassword(email, password);
      await this.sendVerificationEmail();
      return user;
    } catch (error) {
      console.log('Error ->', error)
    }
  }

  async login(email:string, password:string): Promise<User> {
    try {
      const { user } = await this.afAuth.signInWithEmailAndPassword(email, password);
      this.updateUserData(user);
      this.userStatus = true;
      console.log(user)
      return user;
    } catch (error) {
      console.log('Error ->', error)
    }
  }

  async sendVerificationEmail(): Promise<void> {
    try{
      return (await this.afAuth.currentUser).sendEmailVerification();
    }catch(error){
      console.log('Error ->', error)
    }
  }

  isEmailVerified(user:User): boolean{
    return user.emailVerified === true ? true: false;
  }

  async logout(): Promise<void> {
    try{
      await this.afAuth.signOut();
      this.userStatus = false;
    }catch(error){
      console.log('Error ->', error)
    }
  }

  public updateUserData(user:User){
    const userRef:AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data:User = {
      uid:user.uid,
      email:user.email,
      emailVerified:user.emailVerified,
      displayName:user.displayName,
    };
    this.user = data;

    return userRef.set(data, {merge: true})
  }
}
