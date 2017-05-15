import { BrowserModule } from '@angular/platform-browser';
import { NgModule , isDevMode} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
// import { AngularFireModule } from 'angularfire2';
import { NgRedux, NgReduxModule, DevToolsExtension } from 'ng2-redux'
import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MdButtonModule, MdCheckboxModule} from '@angular/material';


/*import { Auth } from './auth.service';*/
import { Authentication } from './services/auth.service';
import { provideAuth, AuthHttp, AuthConfig } from 'angular2-jwt';
import {MaterialModule} from '@angular/material';
import { AlertModule } from 'ng2-bootstrap';


import {IAppState, rootReducer, INITIAL_STATE} from "./redux/store/store";
import { AboutUsComponent } from './about-us/about-us.component';
import { routes } from './routes';
import { HeaderComponent } from './header/header.component';
import createLogger from './middleware/reduxLogger';
import { LoginRegisterComponent } from './login-register/login-register.component';

declare var require: any;

// const createLogger = require('redux-logger');


export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp( new AuthConfig({}), http, options);
}

export const firebaseConfig = {
    apiKey: "AIzaSyAjh_LIC98hSOUbIS8xgo_XY9zTqbgYVRE",
    authDomain: "saeligram-c1718.firebaseapp.com",
    databaseURL: "https://saeligram-c1718.firebaseio.com",
    storageBucket: "saeligram-c1718.appspot.com",
    messagingSenderId: "550885511547"
};

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HeaderComponent,
    LoginRegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    NgReduxModule,
    RouterModule.forRoot(routes),
    MaterialModule.forRoot(),
    AlertModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    /*Auth,*/
    Authentication,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [ Http, RequestOptions ]
    },
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(
    ngRedux: NgRedux<IAppState>,
    devTools: DevToolsExtension){


    var enhancers = isDevMode() ? [devTools.enhancer()] : [];

    var middlewares = isDevMode() ? [createLogger] : [];

    ngRedux.configureStore(rootReducer, INITIAL_STATE, [createLogger], enhancers);
  }
}
