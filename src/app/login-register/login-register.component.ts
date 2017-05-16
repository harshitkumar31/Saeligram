import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {LoginComponent}  from '../login/login.component';
import {RegisterComponent}  from '../register/register.component';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  selectedOption: number;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
    this.selectedOption = 1;
  }
  select(num){
    this.selectedOption = num;
  }
  openDialog() {
    let dialogRef = this.dialog.open(DialogResultExampleDialog);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}



@Component({
  selector: 'dialog-result-example-dialog',
  templateUrl: './dialog-result-example-dialog.html',
})
export class DialogResultExampleDialog {
  selectedOption: number;
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {
    this.selectedOption = 1;
  }
  select(num){
    this.selectedOption = num;
  }
}