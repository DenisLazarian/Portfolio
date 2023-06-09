import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  public chart: any = [];

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  timeLine = [
    
    { subtitle:"Prácticas en empresa (modalidad DUAL)", title: '2022-2023', detail: 'Al mismo tiempo que he estado estudiando, también he realizado las prácticas de empresa en modalidad DUAL (duración de 1000 horas) en la empresa "Ecityclic" de Semic, donde he aprendido las formas de trabajar en una empresa, y he podido poner en práctica mis conocimientos he estado adquiriendo en el ciclo formativo.'},
    { subtitle:"Ciclo formativo grado superior (2nd Curso)", title: '2022-2023', detail: 'En este año me he introducido en el apartado más profesional del código web en general. En este año he empezado a programar a nivel de frontend y backend, desarrollándome a mí mismo, mediante prácticas y ejercicios, obteniendo experiencia con los lenguajes JavaScript y PHP, junto con sus frameworks, Angular y Codeigniter 4 respectivamente.'},
    { subtitle:"Ciclo formativo grado superior (1er Curso)", title: '2021-2022', detail: 'En ese año me matriculé y estudié el primer curso de DAW (Desarrollo de Aplicaciones web), donde he empezado a introducir y entender el arte de la programación en general. En este año he empezado mi ruta en la programación, con el lenguaje JAVA como primer lenguaje.' },
    { subtitle:"Bachillerato", title: '2019-2021', detail: 'Fui estudiante de bachillerato en la modalidad Científico-Tecnológico, en el Instituto la Mitjana en Pardiñas (Lleida-Cataluña, España).' },
    
  ];

  createChart(): void{

    let languajes:any = ["JAVA", "PHP", "HTML/CSS/JS", "Codeigniter 4", "Angular", "MySQL"];

    let data: any = {
      labels: languajes,
      datasets:[{
        axis: 'y',
        // label: 'My first Dataset',
        data: [65, 70, 85, 63, 30, 86],
        fill: false,
        // label: false,
        
        backgroundColor: [
          'rgba(255, 159, 64, 0.2)',
          'rgba(124, 133, 178, 0.2)',
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(173, 102, 255, 0.2)',
        ],
        borderColor:[
          'rgb(255, 159, 64)',
          '#7377ad',
          'rgb(255, 99, 132)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
        ],
        borderWidth: 3
      }]
    }

    this.chart = new Chart('skillsCharts', {
      type: 'bar', //this denotes tha type of chart

      data,
      options: {
        plugins:{
          legend:{
            display: false
          },
          tooltip:{
            enabled: true,
            callbacks: {
              label: function(context: any) {
                let label = context.dataset.label || '';
                if (label) {
                  label += ': ';
                }
                if (context.parsed.y !== null) {
                  label += "";
                }
                return label;
              }
            }
          },
          


        },
        scales:{
          y:{
            display: false,
          }
        }
      },
      

    });
  }

  

}
