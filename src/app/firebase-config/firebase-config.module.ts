import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule, FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../../environment/environment';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule,
  ]
})
export class FirebaseConfigModule { }
