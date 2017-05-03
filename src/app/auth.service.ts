/*
import { Injectable } from "@angular/core";
import { tokenNotExpired } from "angular2-jwt";
declare  var Auth0Lock: any;

//TODO - Add callback URL in auth0 when publishing
@Injectable()
export class Auth{
  userProfile;
  lock = new Auth0Lock('lY3LUhhE9XCXZ488c8itaMZR0Jky2aOb','harshit.eu.auth0.com',{
    theme: {
      logo: 'https://raw.githubusercontent.com/harshitkumar31/Saeligram-fe/master/src/assets/header.jpg',
      primaryColor: '#31324F'
    },
    auth: {
      params: {
        scope: 'openid profile user_id',
        audience: 'https://api.saeligram.com'
        /!*audience: 'https://harshit.eu.auth0.com/api/v2/'*!/
      }
    },
    additionalSignUpFields: [
      {
        name: 'UserType',
        placeholder: 'Artist Or Client?',
        type: "select",
        options: [
          {value: "artist", label: "Artist"},
          {value: "client", label: "Client"}
        ],
      }
    ]
  });

  constructor(){
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    this.lock.on('authenticated', authResult => {
      localStorage.setItem('id_token', authResult.accessToken);

      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if(error) {
          console.log("ERROR", error);
          return;
        }

        localStorage.setItem('profile',JSON.stringify(profile));
        this.userProfile = profile;
      } );
    });
  }

  public login(){
    this.lock.show();
  }

  public  isAuthenticated(){
    return tokenNotExpired();
  }

  public logout(){
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    this.userProfile = null;
  }
}
*/
