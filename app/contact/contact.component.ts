import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  linkedin:string = "https://www.linkedin.com/in/denis-emanuel-lazarian-43a339263/";
  gitHub:string = "https://github.com/DenisLazarian";

  ngOnInit(): void {
  }

}
