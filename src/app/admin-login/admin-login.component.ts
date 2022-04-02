import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

const password: string = "admin"; // admin is the password for login. Don't have to put this. in front of a constant & only have to do for classes.

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  // Property:
  adminPassword: string = ""; // Empty string for adminPassword

  constructor(
    private router: Router
  ) { }

  clicked(): void {
    if(this.adminPassword === password) {
      this.router.navigateByUrl("/admin");
    }
  }

  ngOnInit(): void {
  }

}
