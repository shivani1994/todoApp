import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable,  BehaviorSubject} from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLogin: Boolean = true;
  userData: Observable <firebase.User>;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private toastr: ToastrService,
    private route: Router) { 
    this.userData = angularFireAuth.authState;
    //this.isLogin = false;
}

login(email:string, password:string) {
  this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
  .then(res => {
    this.toastr.success("You successfully logged in!");
    this.isLogin = false;
    this.route.navigate(["/employees"]);
  })
  .catch(error => {
    this.isLogin = true;
    this.toastr.error(error.message);
  });
}

logOut() {
  this.angularFireAuth
      .auth
      .signOut();
      this.toastr.success("You successfully logged out!");
  this.route.navigate(["/login"]);
}

}
