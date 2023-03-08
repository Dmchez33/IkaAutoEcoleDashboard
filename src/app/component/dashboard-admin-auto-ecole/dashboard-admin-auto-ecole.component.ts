import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import * as Leaflet from 'leaflet'; 
import { CoursService } from 'src/app/service/cours/cours.service';
import { QuizService } from 'src/app/service/quiz/quiz.service';
import { UtilisateurService } from 'src/app/service/utilisateur/utilisateur.service';
import { AutoecoleService } from 'src/app/service/autoecole/autoecole.service';
import * as L from 'leaflet';
import { StorageService } from 'src/app/service/storage/storage.service';

Leaflet.Icon.Default.imagePath = 'assets/';
@Component({
  selector: 'app-dashboard-admin-auto-ecole',
  templateUrl: './dashboard-admin-auto-ecole.component.html',
  styleUrls: ['./dashboard-admin-auto-ecole.component.css']
})
export class DashboardAdminAutoEcoleComponent {
  title = "Tableau de board"
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
  roles: string[] = [];
  id:any

  //ATTRIBUTS UTILISES POUR LE MENUBAR
 
  @Input() sidebarId: boolean = true;
  
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  drawer: any;
  static showSidebar: any = true;
  constructor(private tokenStorageService: StorageService, private router: Router,private storageService: StorageService,private autoecoleService: AutoecoleService,private serviceUtilisateur: UtilisateurService,private serviceCours: CoursService,private serviceQuiz: QuizService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  

 
    this.id = this.storageService.getUser();
    this.initMap();
    this.autoecoleService.getAllAutoEcoleByAdmin(this.id.id).subscribe(autoecoles => {
      for (let i = 0; i < autoecoles.length; i++) {
        const autoecole = autoecoles[i];
        const lat = Number(autoecole.adresses[0].latitude);
        const lng = Number(autoecole.adresses[0].longitude);
        const ville = autoecole.adresses[0].ville;
        const quartier = autoecole.adresses[0].quartier;
        const nomAutoecole = autoecole.nom
        this.addMarker(lat,lng,ville,quartier,nomAutoecole);
      }
      const group = L.featureGroup(this.markers).addTo(this.map);
      this.map.fitBounds(group.getBounds());
    });
    
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

  logout(): void {
    this.tokenStorageService.signOut();
    this.router.navigate(['./connexion']);
     //window.location.reload();
  }
  
}
