import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('usernameInput') nameInputRef: ElementRef;
  @ViewChild('passwordInput') passwordInputRef: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  doLogIn() {
    const username = this.nameInputRef.nativeElement.value;
    const password = this.passwordInputRef.nativeElement.value;
    console.log('name is ', username, ' and password is ', password);
    //TODO: get token etc for logged in user
  }

}
