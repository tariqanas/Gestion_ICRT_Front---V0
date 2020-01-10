import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/scripts/canvasjs.min';
@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainComponent implements OnInit {

  wantedMore = false;
  constructor() { }

  ngOnInit() {

    let chart = new CanvasJS.Chart("PositionnementchartContainer", {
      animationEnabled: true,
      title: {
        text: "Positionnement"
      },
      data: [{
        type: "pie",
        startAngle: 240,
        legend:{
          cursor: "pointer",
        },
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [
          {y: 60, label: "Positionnés"},
          {y: 40, label: "Intercontrat"},
        ]
      }]
    });
    
    let chart2 = new CanvasJS.Chart("TechnologieschartContainer", {
      animationEnabled: true,
      title: {
        text: "Technologies positionnées"
      },
      data: [{
        type: "pie",
        startAngle: 240,
        legend:{
          cursor: "pointer",
        },
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [
          {y: 60, label: "Java"},
          {y: 20, label: "BI"},
          {y: 20, label: "Production"}
        ]
      }]
    });

    let chart3 = new CanvasJS.Chart("MonthsCharContainer", {
      animationEnabled: true,
      theme: "light1", // "light1", "light2", "dark1", "dark2"
      title:{
        text: "Positionnement mensuel"
      },
      axisY: {
        title: "Consultants positionés(nombre)"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "Mois /12 => Total des consultants : 45",
        dataPoints: [      
          { y: 10, label: "Janvier" },
          { y: 15,  label: "Février" },
          { y: 20,  label: "Mars" },
          { y: 5,  label: "Avril" },
          { y: 14,  label: "Mai" },
          { y: 13, label: "Juin" },
          { y: 16,  label: "Juillet" },
          { y: 10,  label: "Aout" },
          { y: 16,  label: "Septembre" },
          { y: 10,  label: "Octobre" },
          { y: 16,  label: "Novembre" },
          { y: 10,  label: "Décembre" }
        ]
      }]
    });
    let chart4 =  new CanvasJS.Chart("ExpertisechartContainer", {
        animationEnabled: true,
        title: {
          text: "Expertise - Positionnement"
        },
        data: [{
          type: "pie",
          startAngle: 240,
          legend:{
            cursor: "pointer",
          },
          yValueFormatString: "##0.00\"%\"",
          indexLabel: "{label} {y}",
          dataPoints: [
            {y: 30, label: "Sénior"},
            {y: 50, label: "Confirmé"},
            {y: 50, label: "Junior"}
          ]
        }]
      });

    chart.render();
    chart3.render();
    chart2.render();
    chart4.render();
    
  }
  showMore() {
  this.wantedMore=this.wantedMore==false?true:false;
  }
}



