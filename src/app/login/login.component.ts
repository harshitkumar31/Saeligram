import { Component, OnInit } from '@angular/core';
import { Authentication } from '../services/auth.service';
import {MdSnackBar} from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private auth: Authentication,public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

  login() {
        this.auth.login(this.model.email, this.model.password,()=>{
	  	this.snackBar.open("Logged In", "", {
	      duration: 2000,
	    });
		});
    }
}
