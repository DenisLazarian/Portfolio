import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {
  title:string = 'portafolio';
  fullYear:string = new Date().getFullYear().toString();

  navbarSelectedOption = 'home';
  selectedLanguage = 'es';


  constructor(private _router:Router, private translateService: TranslateService) { 
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  selectedOptionStyleStatus(id: string): void{
    let classItem = 'item-nav-link';
    // this.debugItem(id);
    
    if(id == this.navbarSelectedOption){
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
  debugItem(item: string): void{
    console.log(item);
  }

  selectedLink(itemSelected:string):void{
    this.navbarSelectedOption = itemSelected;
    this.selectedOptionStyleStatus(itemSelected);
  }

  selectLanguage(lang: string) {
      this.translateService.use(lang);
      
      let options = document.querySelectorAll('#select-lang options');
    // cambio prueba
      for (let index = 0; index < options.length; index++) {
        if(options[index].nodeValue == lang){
          options[index].setAttribute('selected', 'selected');
        }else{
          options[index].removeAttribute('selected');
        }
      }
  }
}
