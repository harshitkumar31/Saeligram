import { Component, OnInit } from '@angular/core';
import { Authentication } from '../services/auth.service';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth: Authentication,public snackBar: MdSnackBar) { }

  ngOnInit() {
  }

}
