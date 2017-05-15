import { Component, OnInit } from '@angular/core';
import { Authentication } from '../services/auth.service';
import { SET_AUTH_DETAILS} from '../redux/actions/actions';
import { NgRedux, select } from 'ng2-redux';
import {IAppState} from "../redux/store/store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @select() authenticated;

  constructor(private auth: Authentication,private ngRedux: NgRedux<IAppState>) { }

  login(username, password){
  	this.auth.login(username, password);
  }

  logout(){
  	this.auth.logout();
  }

  ngOnInit() {
  }

}
