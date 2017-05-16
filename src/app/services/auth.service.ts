import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { API_HOST, API_HOST_PORT } from '../helpers/enums/api';

import { SET_AUTH_DETAILS, RESET_AUTH_DETAILS} from '../redux/actions/actions';
import { NgRedux, select } from 'ng2-redux';
import {IAppState} from "../redux/store/store";

@Injectable()
export class Authentication{
	reg_url = `${API_HOST}:${API_HOST_PORT}/api/users/`;
	login_url = `${API_HOST}:${API_HOST_PORT}/api/users/login`;
	constructor(private http: Http,private ngRedux: NgRedux<IAppState>)	{

	}

	login(email, password, afterLoginFn){
		const user = {
			email,
			password,
		};
		const url = `http://${API_HOST}:${API_HOST_PORT}/api/users/login`;
		return this.http.post(url,{user}).subscribe(res => {
			console.log(res);
			const resp = res.json();
	  		const userObj = resp.user;
	  		this.ngRedux.dispatch({ type: SET_AUTH_DETAILS, payload: userObj });
	  		afterLoginFn();
		});
	}

	register(email,username, password, userType, afterRegisterFn){
		const user = {
			email,
			password,
			username,
			userType,
		};
		const url = `http://${API_HOST}:${API_HOST_PORT}/api/users`;
		return this.http.post(url,{user}).subscribe(res => {
			console.log(res);
			const resp = res.json();
	  		const userObj = resp.user;
	  		// this.ngRedux.dispatch({ type: SET_AUTH_DETAILS, payload: userObj });
	  		afterRegisterFn();
		});	
	}

	logout(afterLogoutFn){
		this.ngRedux.dispatch({type: RESET_AUTH_DETAILS});
		afterLogoutFn();
	}
}