import { Component, OnInit } from "@angular/core";

@Component({
  selector: "profile-photo",
  templateUrl: "./profile-photo.component.html",
  styleUrls: ["./profile-photo.component.css"],

})
export class ProfilePhotoComponent implements OnInit {

  constructor() {}
  
  ngOnInit() {}

  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

 closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

}
