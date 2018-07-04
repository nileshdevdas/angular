import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {


  handleClick($event) {
    console.log($event.target.innerHTML);
  }
  constructor() { }

  ngOnInit() {
  }

}


