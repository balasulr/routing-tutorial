import { Component, OnInit } from '@angular/core';
import { Menu } from './menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  // Properties
  menus: Menu[] = [ // Array of instances of menu
    new Menu("Home", "/home"), // Display is home & route is "/home"
    new Menu("ABOUT", "/about"),
    new Menu("HELP", "/help/1"),
    new Menu("REVISION", "/revision"),
    new Menu("ADMIN LOGIN", "/admin/login")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
