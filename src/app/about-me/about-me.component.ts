import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  pdfURL:string = 'assets/CV-Estandarizado.pdf';

  @Output() newEventEmiter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  selectLink(itemSelected:string):void{
    this.newEventEmiter.emit(itemSelected);
  }

}
