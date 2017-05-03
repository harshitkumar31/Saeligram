import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

import { API_HOST, API_HOST_PORT } from '../helpers/enums/api';

import { NgRedux, select } from 'ng2-redux';
import {IAppState} from "../redux/store/store";

@Injectable()
export class Authentication{
	reg_url = `${API_HOST}:${API_HOST_PORT}/api/users/`;
	login_url = `${API_HOST}:${API_HOST_PORT}/api/users/login`;
	constructor(private http: Http,private ngRedux: NgRedux<IAppState>)	{

	}

	public login(username, password){
		const url = `http://${API_HOST}:${API_HOST_PORT}/api/requirements/9`;
		this.http.get(url).subscribe(requirement => {
			console.log('Success');
			console.log(requirement);
		})
	}
}