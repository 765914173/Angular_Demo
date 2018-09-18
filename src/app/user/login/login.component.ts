import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allResolved } from 'q';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: String;
  pass: String;
  change = 'password';
  constructor(private router: Router) { }
  open = 'glyphicon glyphicon-eye-open';

  ngOnInit() {
  }

  login() {
    if (this.user == null) {
      console.log();
      alert('Enter Username please');
    } else if (this.pass == null) {
      alert('Enter Password please');
      console.log();
    } else {
      if (this.user === 'admin' && this.pass === 'admin') {
        this.router.navigate(['/dashboard']);
      } else {
        console.log();
        alert('User and password do not mathc');
      }
    }
  }

  showPass() {
    if (this.open === 'glyphicon glyphicon-eye-open') {
      this.open = 'glyphicon glyphicon-eye-close';
      this.change = 'text';
    } else {
      this.open = 'glyphicon glyphicon-eye-open';
      this.change = 'password';
    }
  }

  selected() {

  }

  clear() {
    this.user = null;
    this.pass = null;
  }

}
