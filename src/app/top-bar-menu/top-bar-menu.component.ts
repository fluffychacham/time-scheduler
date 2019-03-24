import { Component, OnInit, HostListener } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-top-bar-menu',
  templateUrl: './top-bar-menu.component.html',
  styleUrls: ['./top-bar-menu.component.sass'],
})
export class TopBarMenuComponent implements OnInit {

  title = "Time Scheduler";

  username = "C";

  showNavLinks = false;
  showUserDropdown = false;

  constructor() {}

  @HostListener('document:click', ['$event'])
  onclick(event){
    if(!(event.target.className == 'fas fa-bars' || 
      event.target.className == "menu-button" || 
      event.target.className == 'userButton')){
      this.showNavLinks = false;
      this.showUserDropdown = false;
    }
  }

  toggleNavLinks(){
    this.showNavLinks = !this.showNavLinks;
  }

  toggleUserDropdown(){
    this.showUserDropdown = !this.showUserDropdown;
  }

  ngOnInit() {
  }

}
