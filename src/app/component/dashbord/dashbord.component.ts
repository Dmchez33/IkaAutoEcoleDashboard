import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import * as Leaflet from 'leaflet'; 
import { CoursService } from 'src/app/service/cours/cours.service';
import { QuizService } from 'src/app/service/quiz/quiz.service';
import { UtilisateurService } from 'src/app/service/utilisateur/utilisateur.service';
import { AutoecoleService } from 'src/app/service/autoecole/autoecole.service';
import * as L from 'leaflet';

Leaflet.Icon.Default.imagePath = 'assets/';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
  title = "Dashboard"
  allCoursLength:any;
  allQuizLength:any;
  nombre:any;
  allAdmin: any;
  allApprenant: any;
  allUserConnected:any;
  autoecole:any;
  autoecoleLatLng = new Array();
  map!: L.Map;
  markers: L.Marker[] = [];
  markerGroup!: L.LayerGroup;

  constructor(private autoecoleService: AutoecoleService,private serviceUtilisateur: UtilisateurService,private serviceCours: CoursService,private serviceQuiz: QuizService) { }

  ngOnInit(): void {
    
    this.initMap();
    this.autoecoleService.getAllAutoEcole().subscribe(autoecoles => {
      for (let i = 0; i < autoecoles.length; i++) {
        const autoecole = autoecoles[i];
        const lat = Number(autoecole.adresses[0].latitude);
        const lng = Number(autoecole.adresses[0].longitude);
        const ville = autoecole.adresses[0].ville;
        const quartier = autoecole.adresses[0].quartier;
        const nomAutoecole = autoecole.nom
        this.addMarker(lng,lat,ville,quartier,nomAutoecole);
      }
      const group = L.featureGroup(this.markers).addTo(this.map);
      this.map.fitBounds(group.getBounds());
    });
      // for(let i=0; i<data.length; i++){
      //   this.autoecoleLatLng.push(
      //     {
      //       position: { lat: Number(data[i].adresses[0].latitude), lng: Number(data[i].adresses[0].longitude) },
      //       draggable: true,
      //       ville: data[i].adresses[0].ville,
      //       quartier: data[i].adresses[0].quartier,
      //       nomAutoecole:data[i].nom
      //     }
      //   );
      // }
      
      // console.log(this.autoecoleLatLng); // afficher les valeurs de autoecoleLatLng
      // this.initMarkers(); // initialiser les marqueurs sur la carte
    // })
    console.log(this.autoecoleLatLng[0])
    this.serviceCours.listeAllCours().subscribe(data => {
      this.allCoursLength = data.length
      console.log(data.length)

    });

    this.serviceQuiz.getAllQuiz().subscribe(data =>{
      this.allQuizLength = data.length
      console.log(data)
    });

    this.serviceUtilisateur.getAllProprietaire().subscribe(
      data =>{
        console.log(data);
        this.allAdmin = data.length;
      }
    )

    this.serviceUtilisateur.getAllApprenant().subscribe(
      data =>{
        console.log(data);
        this.allApprenant = data.length;
      }
    )

    this.serviceUtilisateur.getAllUserConnected().subscribe(
      data =>{
        console.log(data);
        this.allUserConnected = data;
      }
    );
  }
  private initMap(): void {
    this.map = L.map('map', {
      //center: [48.8566, 2.3522],
      zoom: 6,
      
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18
    }).addTo(this.map);
  }

  private addMarker(lat: number, lng: number, ville:any,quartier:any,nom:any): void {
    const marker = L.marker([lat, lng]).addTo(this.map).bindPopup(`<b>Ville: ${ville}</b> <div>Quartier: ${quartier} </div> <div>Auto-école: ${nom} </div>`);;
  this.markers.push(marker);
  }
  // code par rapport au map
  // map!: Leaflet.Map;
  // markers: Leaflet.Marker[] = [];
  // options = {
  //   layers: [
  //     Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  //     })
  //   ],
  //   zoom: 16,
  //   // center: {
  //   //    lat: 28.626137, 
  //   //    lng: 79.821603 }
  // }

  // initMarkers() {
  //   const initialMarkers = [
  //     {
  //       position: { lat: 28.625485, lng: 79.821091 },
  //       draggable: true
  //     },
      
  //   ];
  //   console.log(this.autoecoleLatLng)
  //   for (let index = 0; index < this.autoecoleLatLng.length; index++) {
  //     const data = this.autoecoleLatLng[index];
  //     const marker = this.generateMarker(data, index);
  //     marker.addTo(this.map).bindPopup(`<b>Ville: ${data.ville}</b> <div>Quartier: ${data.quartier} </div> <div>Auto-école: ${data.nomAutoecole} </div>`);
  //     this.map.panTo(data.position);
  //     this.markers.push(marker)
  //   }
  // }

  // generateMarker(data: any, index: number) {
  //   return Leaflet.marker(
  //     data.position, 
  //     { draggable: data.draggable }
  //     )
  //     .on('click', (event) => this.markerClicked(event, index))
  //     //.on('dragend', (event) => this.markerDragEnd(event, index));
  // }

  // onMapReady($event: Leaflet.Map) {
  //   this.map = $event;
  //   this.initMarkers();
  // }
  // markerClicked($event: any, index: number) {
  //   console.log($event.latlng.lat, $event.latlng.lng);
  // }

}
