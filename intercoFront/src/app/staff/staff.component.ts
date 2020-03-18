import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import * as CanvasJS from '../../assets/scripts/canvasjs.min';
import {MeteoServiceService} from '../Services/MeteoService/meteo-service.service';



export interface PeriodicElement {
  position: number;
  nom: string;
  prenom: string;
  age: number;
  clientActuel : string;
  techno : string;
  anciennete : number;
  niveau : string;
  nationalite: string;
  score:number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, nom: 'TARIQ', prenom: 'Anas',age:25,clientActuel:'Datalake',techno:'Angular',anciennete:1,niveau:'confirmé',nationalite:'Marocain',score:1000},
  {position: 2, nom: 'TARIQ', prenom: 'Saad',age:20,clientActuel:'RATP',techno:'Java',anciennete:1,niveau:'confirmé',nationalite:'Marocain',score:1000},
  {position: 3, nom: 'Chibandil', prenom: 'Lemon',age:34,clientActuel:'EDF',techno:'.NET',anciennete:3,niveau:'junior',nationalite:'Francais',score:800},
  {position: 4, nom: 'Mickey', prenom: 'Mouse',age:67,clientActuel:'RATP',techno:'Prod',anciennete:5,niveau:'Senior',nationalite:'Algerien',score:600},
  {position: 5, nom: 'Donald', prenom: 'Trump',age:58,clientActuel:'Devoteam',techno:'BI',anciennete:2,niveau:'Senior',nationalite:'Tunisien',score:500},
  {position: 6, nom: 'Donald', prenom: 'Duck',age:45,clientActuel:'Sopra Banking',techno:'BIG Data',anciennete:1,niveau:'confirmé',nationalite:'Marocain',score:400},
  {position: 7, nom: 'Super', prenom: 'Hero',age:25,clientActuel:'IBM',techno:'java',anciennete:1,niveau:'Junior',nationalite:'Francais',score:1000},
  {position: 8, nom: 'Jhonson', prenom: 'Jhonny',age:27,clientActuel:'CNSS',techno:'java/angular',anciennete:10,niveau:'confirmé',nationalite:'Italien',score:2000},
  {position: 9, nom: 'Pablo', prenom: 'Escobar',age:36,clientActuel:'SCNF',techno:'CoffeeScript',anciennete:7,niveau:'Confirmé',nationalite:'Tunisien',score:1500},
  {position: 10, nom: 'Wick', prenom: 'John',age:47,clientActuel:'Midilline',techno:'Test',anciennete:8,niveau:'Senior',nationalite:'Marocain',score:660},
  {position: 11, nom: 'Clarck', prenom: 'Ken',age:39,clientActuel:'Fedex',techno:'Test',anciennete:1,niveau:'confirmé',nationalite:'Americain',score:456}
];

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})


export class StaffComponent implements OnInit {
  displayedColumns: string[] = ['position', 'nom', 'prenom', 'age','clientActuel','techno','anciennete','niveau','nationalite','score'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
   i = 60;

   constructor(private meteoService:MeteoServiceService) { }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

  getStaffInfos() {
    this.meteoService.getStaffInformations().subscribe(elem => {
      console.log(elem);
    })
  }
  ngOnInit() {
  this.LoadNationalityChart();
  this.SeniorityChart();
  this.getStaffInfos();
  }

  LoadNationalityChart() {
    let chart1 = new CanvasJS.Chart("nationalityChartContainer", {
      animationEnabled: true,
      title: {
        text: "Nationalités du staff Datalake"
      },
      data: [{
        type: "pie",
        showInLegend: true, 
        startAngle: 240,
        legend:{
          cursor: "pointer",
        },
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [
          {y: 40, label: "Marocains" , name:"Marocains"},
          {y: 10, label: "Algériens" , name:"Algériens"},
          {y: 40, label: "Tunisiens" , name:"Tunisiens"},
          {y: 9, label: "Français" , name:"Français"},
          {y: 1, label: "Américain" , name:"Américain"},
        ]
      }]
    });

    chart1.render();
  }

  SeniorityChart() {
    let chart1 = new CanvasJS.Chart("seniorityChartContainer", {
      animationEnabled: true,
      title: {
        text: "Expertise du staff Datalake"
      },
      data: [{
        type: "pie",
        showInLegend: true,
        startAngle: 240,
        legend:{
          cursor: "pointer",
        },
        yValueFormatString: "##0.00\"%\"",
        indexLabel: "{label} {y}",
        dataPoints: [
          {y: 60, label: "Confirmés" ,name:"Confirmés"},
          {y: 30, label: "Juniors" , name:"Juniors"},
          {y: 10, label: "Seniors" , name:"Séniors"},
        ]
      }]
    });

    chart1.render();
  }

  calculatePourcentage() {

  }

  

}
