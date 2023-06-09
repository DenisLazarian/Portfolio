import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { marker as _ } from '@biesbjerg/ngx-translate-extract-marker';


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
    
    { subtitle:_("WORKS.TIMELINE_ITEMS.ITEM_4.TITLE"), title: '2022-2023', detail: _("WORKS.TIMELINE_ITEMS.ITEM_4.DESCRIPTION")},
    { subtitle:_("WORKS.TIMELINE_ITEMS.ITEM_3.TITLE"), title: '2022-2023', detail: _("WORKS.TIMELINE_ITEMS.ITEM_3.DESCRIPTION")},
    { subtitle:_("WORKS.TIMELINE_ITEMS.ITEM_2.TITLE"), title: '2021-2022', detail: _("WORKS.TIMELINE_ITEMS.ITEM_2.DESCRIPTION") },
    { subtitle:_("WORKS.TIMELINE_ITEMS.ITEM_1.TITLE"), title: '2019-2021', detail: _("WORKS.TIMELINE_ITEMS.ITEM_1.DESCRIPTION")},
    
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
