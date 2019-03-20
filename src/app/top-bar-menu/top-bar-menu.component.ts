import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar-menu',
  templateUrl: './top-bar-menu.component.html',
  styleUrls: ['./top-bar-menu.component.sass']
})
export class TopBarMenuComponent implements OnInit {

  title = "Time Scheduler";

  constructor() { }

  ngOnInit() {
  }

}
