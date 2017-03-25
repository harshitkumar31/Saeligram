import { Component, OnInit, OnDestroy } from '@angular/core';
import {AngularFire, FirebaseListObservable, AuthProviders, AuthMethods} from 'angularfire2';
import { Observable } from 'rxjs/observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Auth } from './auth.service';
import { AuthHttp } from 'angular2-jwt';
import { NgRedux, select } from 'ng2-redux'
import {IAppState} from "./store";
import { INCREMENT} from './actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app works!';
  cuisines: FirebaseListObservable<any[]>;
  restaurants: Observable<any[]>;
  displayName;
  photoUrl;
  error;
  @select() counter;
  // @select(['messaging', 'newMessages']) newMessages;

  constructor(private af: AngularFire, private http: Http, private auth: Auth, private authHttp: AuthHttp,private ngRedux: NgRedux<IAppState>){

  }

  ngOnInit(){
	/*this.cuisines = this.af.database.list('/cuisines');
	this.restaurants = this.af.database.list('/restaurants')
    .map(restaurants => {
      console.log("BEFORE MAP", restaurants);
      restaurants.map(restaurant => {
        restaurant.featureTypes = [];
        for(var f in restaurant.features)
          restaurant.featureTypes.push(this.af.database.object('/features/'+f));
      });
      return restaurants;
    });
    console.log("AFTER MAP", this.restaurants);
	console.log(this.restaurants);*/
	  /*this.af.auth.subscribe(authState => {
	    if(!authState) {

        this.displayName =null;
        this.photoUrl = null;
        return;
      }
        let userRef = this.af.database.object('/users/'+authState.uid);
	      userRef.subscribe(user=>{
          let url = `https://graph.facebook.com/v2.8/${authState.facebook.uid}?fields=first_name,last_name&access_token=${user.accessToken}`;
          this.http.get(url).subscribe(response => {
            let user = response.json();
            userRef.update({
              first_name: user.first_name,
              last_name: user.last_name
            });
          });
        });

	      this.displayName = authState.auth.displayName;
	      this.photoUrl = authState.auth.photoURL;

    });*/
  }

  register(){
    this.af.auth.createUser({
      email: 'akhiltejakanduri@gmail.com',
      password: '1234567!@#'
    })
      .then(authState => {
        authState.auth.sendEmailVerification();
      })
      .catch(error => console.log("ERR", error));
  }
  login(){
    /*this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup,
      scope: ['email','public_profile','user_friends']
    }).then(
      (authState: any) =>{
        this.af.database.object('/users/'+ authState.uid).update({
          accessToken: authState.facebook.accessToken
        })
      }
    );*/
    this.af.auth.login({
      email: 'hrsht.kumar1@gmail.com',
      password: '1234567!@'
    },{
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    })
      .then(
        authState => console.log("LOGIN_THEN",authState)
      )
      .catch(err=> {
        console.log("LOGIN_ERR",err);
        this.error = err;
      });
  }

  logout(){
    this.af.auth.logout();
  }


  showProfile(){
    console.log(this.auth.userProfile);

  }

  updateProfile(){
    var url = 'https://' + 'harshit.eu.auth0.com' +'/api/v2/users/' + this.auth.userProfile.user_id;
    var data = {
      user_metadata: {
        location: 'Hyd'
      }
    };

    this.authHttp.patch(url, data)
      .subscribe(res => console.log(res.json()));
  }

  callApi(){
    this.authHttp.get('http://localhost:8080/authorized')
      .subscribe(res => console.log(res));
  }

  increment(){
    this.ngRedux.dispatch({ type: INCREMENT });
  }

}
