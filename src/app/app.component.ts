import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
