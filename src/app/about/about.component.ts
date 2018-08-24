import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isCollapsed = false;

  public logos: any[];
  
  constructor() {}

  ngOnInit(){
   this.logos= [
      {
        name:'Google Plus',
        path: '../assets/images/google-plus.svg'
      },
      {
        name:'Facebook',
        path: '../assets/images/facebook.svg'
      },
      {
        name:'Github',
        path: '../assets/images/github.svg'
      },
      {
        name:'Pintrest',
        path: '../assets/images/pintrest.svg'
      }
    ];
  }

}
