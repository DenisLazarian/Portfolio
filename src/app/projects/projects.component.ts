import { Component, OnInit } from '@angular/core';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'] 
})

export class ProjectsComponent implements OnInit {

  ngOnInit(): void {
    this.searchProject();
  }
  constructor() { }

  projectsSearched: any = [];
  projectFinded:boolean = false;

  searchProject(){
    let search = (<HTMLInputElement>document.getElementById('search')).value;

    this.projectsSearched = [];
    if(search == ""){
      this.projectsSearched = this.projects;
    }else{
      this.projects.forEach((project:any) => {
        for (let y = 0; y < project.lang_tags.length; y++) {
          if(project.lang_tags[y].toLowerCase().includes(search.toLowerCase().trim()) && !this.projectFinded){
            this.projectsSearched.push(project);
            this.projectFinded = true;
          }
        }
        this.projectFinded = false;
      });
    }
    this.enlargeMainScreen();
  }

  enlargeMainScreen():void{

    let heightScreen = window.innerHeight;

    let mainScreen = document.getElementById('cont')?.offsetHeight;
    let footerScreen = document.getElementById('foot')?.offsetHeight;
    let headScreen = document.getElementById('head')?.offsetHeight;


    let sumaContent = (headScreen || 0) + (mainScreen || 0) +( footerScreen || 0);

    let tag = document.getElementById('main');
  }

  // prueba:string = _('PROJECTS.DAWLY.TITLE');

  projects:any = [
    {
      title: _('PROJECTS.DAWLY.TITLE'),
      description: _("PROJECTS.DAWLY.DESCRIPTION"),
      image: "assets/img/src-img/dawli.JPG",
      url_host: "#",
      url_github: "https://github.com/DenisLazarian/CI4-daw.li",
      lang_tags:[
        "PHP","JavaScript","HTML","Bootstap 5","Codeigniter 4","MySQL", "AJAX", "JQuery"
      ]
    },
    {
      title:  _('PROJECTS.CI4-NEWS.TITLE'),
      description: _("PROJECTS.CI4-NEWS.DESCRIPTION"),
      image: "assets/img/src-img/ci-news.JPG",
      url_host: "#",
      url_github: "https://github.com/DenisLazarian/ci4-news",
      lang_tags:[
        "PHP", "Codeigniter 4", "MySQL", "HTML", "Bootstrap 5"
      ]
    },
    {
      title: _('PROJECTS.FLOURISH-AND-BLOTTS.TITLE'),
      description: _("PROJECTS.FLOURISH-AND-BLOTTS.DESCRIPTION"),
      image: "assets/img/notFoundImage.png",
      url_host: "#",
      url_github: "https://github.com/DenisLazarian/Flouris_and_Blotts",
      lang_tags:[
        "Java","TypeScript","HTML","CSS","API REST", "Spring Boot"
      ]
    },
    
  ]

}
