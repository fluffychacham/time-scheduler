import { Component, OnInit, HostListener } from '@angular/core';
import { 
  trigger,
  state,
  style,
  animate,
  transition
 } from '@angular/animations';

@Component({
  selector: 'app-top-bar-menu',
  templateUrl: './top-bar-menu.component.html',
  styleUrls: ['./top-bar-menu.component.sass'],
  animations: [
    trigger('navLinks',[
      state('show', style({
        height: 'auto'        
      })),
      state('hidden', style({
        height: '0'
      })),
      transition('hidden => show', [
        animate('.5s .5s ease-in-out')
      ]),
      transition('show => hidden', [
        animate('.5s .5s ease-in-out')
      ])
    ])
  ]
})
export class TopBarMenuComponent implements OnInit {

  title = "Time Scheduler";

  username = "K";

  showNavLinks = false;
  showUserDropdown = false;

  constructor() {}

  @HostListener('document:click')
  clickout(){
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
