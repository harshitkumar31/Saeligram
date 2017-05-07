import { Component, OnInit, OnDestroy } from '@angular/core';
// import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { Observable } from 'rxjs/observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*import { Auth } from './auth.service';*/
import { AuthHttp } from 'angular2-jwt';
import { NgRedux, select } from 'ng2-redux';
import {IAppState} from "./redux/store/store";
import { INCREMENT} from './redux/actions/actions';
import { HeaderComponent } from './header/header.component';
import { Authentication } from './services/auth.service';
import {MdDialog, MdDialogRef, MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  {
  title = 'app works!';

  restaurants: Observable<any[]>;
  displayName;
  photoUrl;
  error;
  @select() counter;
  // @select(['messaging', 'newMessages']) newMessages;

  constructor(/*private af: AngularFire,*/ private http: Http, private auth: Authentication, private authHttp: AuthHttp,private ngRedux: NgRedux<IAppState>){

  }

  ngOnInit(){
	
  }

  register(){
    
  }

  getReq(){

  }

  login(){
  
  }

  logout(){

  }


  showProfile(){
    /*console.log(this.auth);*/
    console.log(this);
  }

  updateProfile(){
    /*var url = 'https://' + 'harshit.eu.auth0.com' +'/api/v2/users/' + this.auth.userProfile.sub;
    var data = {
      user_metadata: {
        location: 'Hyd'
      }
    };

    this.authHttp.patch(url, data)
      .subscribe(res => console.log(res.json()));*/
  }

  callApi(){
    this.authHttp.get('http://localhost:8080/authorized')
      .subscribe(res => console.log(res));
  }

  increment(){
    this.ngRedux.dispatch({ type: INCREMENT });
  }



}
