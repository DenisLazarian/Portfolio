import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title:string = 'portafolio';
  fullYear:string = new Date().getFullYear().toString();

  navbarSelectedOption = 'home';

  constructor(private _router:Router) { }

  selectedOptionStyleStatus(id: string): void{
    let classItem = 'item-nav-link';
    // this.debugItem(id);
    
    if(id == this.navbarSelectedOption){
      // document.getElementById(id)?.classList.add('bg-white');
      // document.getElementById(id)?.classList.add('text-muted');
      document.getElementById(id)?.classList.add('selected');

      this.removeStyleStatusSelection(classItem);
    }

  }

  removeStyleStatusSelection(classItem: string){
    let classItems = document.getElementsByClassName(classItem)

    for (let index = 0; index < classItems.length; index++) {
      let element = classItems[index];
      if(element.id != this.navbarSelectedOption){
        // element.classList.remove('bg-white');
        // element.classList.remove('text-muted');
        element.classList.remove('selected');
      }
    }
    
  }

 
  enlargeMainScreen():void{

    let heightScreen = window.innerHeight;

    let mainScreen = document.getElementById('cont')?.offsetHeight;
    let footerScreen = document.getElementById('foot')?.offsetHeight;
    let headScreen = document.getElementById('head')?.offsetHeight;

    console.log(heightScreen+" "+ headScreen+" " +mainScreen+" "+footerScreen);

  }

  debugItem(item: string): void{
    console.log(item);
  }

  selectedLink(itemSelected:string):void{
    this.navbarSelectedOption = itemSelected;
    this.selectedOptionStyleStatus(itemSelected);
  }
}
