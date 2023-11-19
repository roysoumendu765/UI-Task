import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mob-header',
  templateUrl: './mob-header.component.html',
  styleUrls: ['./mob-header.component.scss']
})
export class MobHeaderComponent implements OnInit {
  isToggle: boolean = false;

  lines = [
    {
      "id": 1,
      "item": "line1"
    },
    {
      "id": 2,
      "item": "line2"
    },
    {
      "id": 3,
      "item": "line3"
    },
  ]

  navItems = [
    {
      "id": 1, 
      "field": "Home",
      "isShow": false
    },
    {
      "id": 2,
      "field": "Services",
      "isShow": false
    },
    {
      "id": 3,
      "field": "About Us",
      "isShow": false
    },
    {
      "id": 4,
      "field": "Appointment",
      "isShow": false
    },
    {
      "id": 5,
      "field": "Contact",
      "isShow": false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  toggleUp(){
    this.isToggle = !this.isToggle
  }
}
