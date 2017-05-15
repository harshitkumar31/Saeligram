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

	login(email, password){
		const user = {
			email,
			password,
		};
		const url = `http://${API_HOST}:${API_HOST_PORT}/api/users/login`;
		return this.http.post(url,{user}).subscribe(res => {
			console.log(res);
	  		const userObj = JSON.parse(res["_body"]).user;
	  		this.ngRedux.dispatch({ type: SET_AUTH_DETAILS, payload: userObj });
		});
	}

	logout(){
		this.ngRedux.dispatch({type: RESET_AUTH_DETAILS});
	}
}