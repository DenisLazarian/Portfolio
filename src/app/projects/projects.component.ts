import { Component, OnInit } from '@angular/core';

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
          if(project.lang_tags[y].toLowerCase().includes(search.toLowerCase()) && !this.projectFinded){
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

  

  projects:any = [
    {
      title: "Daw.ly",
      description: "Se trata de un sistema gestor de links similar a la plataforma web 'bitly', el cual permite acortar links y compartirlos en las redes sociales. El sistema permite gestionar los links acortados, además de poder ver las visitas a ese link seleccionando un rango de días. Para los usuarios con rol administrador, incluye también una sección de administración de usuarios, donde se puede ver los usuarios registrados, editarlos, eliminarlos y crear nuevos usuarios.",
      image: "assets/img/src-img/dawli.JPG",
      url_host: "#",
      url_github: "https://github.com/DenisLazarian/CI4-daw.li",
      lang_tags:[
        "PHP","JavaScript","HTML","Bootstap 5","Codeigniter 4","MySQL", "AJAX", "JQuery"
      ]
    },
    {
      title: "CI4-News",
      description: `Se trata de un gestor de noticias simple donde se pueden generar, editar, eliminar y visualizar noticias. El sistema también dispone de un gestor de usuarios en los cuales se incluye la asignación de roles, los cuales son: Administrador, Editor y Usuario. El sistema también dispone de un sistema de login y registro de usuarios, y algunas de sus funciones están restringidas para usuarios no registrados o usuarios con rol de específico.`,
      image: "assets/img/src-img/ci-news.JPG",
      url_host: "#",
      url_github: "https://github.com/DenisLazarian/ci4-news",
      lang_tags:[
        "PHP", "Codeigniter 4", "MySQL", "HTML", "Bootstrap 5"
      ]
    },
    // {
    //   title: "Proyecto 2",
    //   description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
    //   image: "assets/img/notFoundImage.png",
    //   url_host: "#",
    //   url_github: "#",
    //   lang_tags:[
    //     "Spring Boot","JavaScript","HTML","CSS","MySQL","API REST"
    //   ]
    // },
    // {
    //   title: "Proyecto 3",
    //   description: `Lorem ipsum dolor si veritatis eum in exercitationem, saepe hic voluptate! Natus omnis quod iusto commodi qui veritatis magni porro consequuntur earum corporis!`,
    //   image: "assets/img/notFoundImage.png",
    //   url_host: "#",
    //   url_github: "#",
    //   lang_tags:[
    //     "Java","JavaScript","HTML","CSS","API REST"
    //   ]
    // },
    {
      title: "Ahorcado simple",
      description: `Juego del ahorcado simple, con un diccionario de palabras en un archivo de texto, i sus correspondientes funcionalidades a los aciertos o fallos de caracteres segun la palabra seleccionada aleatoriamente. No dispone de limite de fallos, pero si de tiempo, el cual es de 45 segundos. El juego al finalizar la partida se muestra el tiempo que ha tardado en finalizarla, y la palabra que se tenia que adivinar`,
      image: "assets/img/src-img/ahorcado_simple.JPG", 
      url_host: "#",
      url_github: "https://github.com/DenisLazarian/Ahorcado_simple",
      lang_tags:[
        "JavaScript","HTML","CSS"
      ]
    }
    
  ]

}
