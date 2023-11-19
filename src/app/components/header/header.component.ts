import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItem: any;
  eleVal: any;

  constructor() { 
    this.navItem = []
  }

  ngOnInit(): void {
    this.navItem = [
      {
        "id": 1, 
        "field": "Home",
        "link": "home",
        "isShow": false
      },
      {
        "id": 2,
        "field": "Services",
        "link": "services",
        "isShow": false
      },
      {
        "id": 3,
        "field": "About Us",
        "link": "about",
        "isShow": false
      },
      {
        "id": 4,
        "field": "Appointment",
        "link": "appointment",
        "isShow": false
      },
      {
        "id": 5,
        "field": "Contact",
        "link": "contact",
        "isShow": false
      },
      {
        "id": 6,
        "field": "+(605) 1234-56789",
        "link": "connect",
        "isShow": true
      }
    ]
  }

  activeEle(value: number){
    this.eleVal = value;
  }

}
