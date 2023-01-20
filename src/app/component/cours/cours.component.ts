import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  title1 = "Cours"
  recherche:any;
  pageEvent1:any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  
  allCours: any[] = [
    {theme: "Arrêt Stationnement", titre: 'Définitions', description: "L’arrêt est l’immobilisation momentanée d’un véhicule pour permettre :"},
    {theme: "Règles de circulation", titre: 'Règles générales', description: "Le chargement ou le dechargement d’objets."},
    {theme: "Signalisation", titre: 'Cas d’interdiction', description: "Le conducteur doit rester près de la véhicule pour être en mesure de le deplacer en cas de besoin."},
    {theme: "Tunels et passages", titre: 'Sur autoroute', description: "Le conducteur doit rester près de la véhicule pour être en mesure de le deplacer en cas de besoin."},
    {theme: "Signalisation", titre: 'Cas d’interdiction', description: "Le conducteur doit rester près de la véhicule pour être en mesure de le deplacer en cas de besoin."},
    {theme: "Tunels et passages", titre: 'Sur autoroute', description: "Le conducteur doit rester près de la véhicule pour être en mesure de le deplacer en cas de besoin."},
    {theme: "Signalisation", titre: 'Cas d’interdiction', description: "Le conducteur doit rester près de la véhicule pour être en mesure de le deplacer en cas de besoin."},
    {theme: "Tunels et passages", titre: 'Sur autoroute', description: "Le conducteur doit rester près de la véhicule pour être en mesure de le deplacer en cas de besoin."},     
  ];
  cours: any[] = this.allCours;
  length = this.cours.length;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  
  ngAfterViewInit() {
    this.paginator!.page
      .subscribe(
        (event: any) => {
          this.cours = this.allCours.slice(event.pageIndex* event.pageSize, (event.pageIndex + 1) * event.pageSize);
        });
        
  }

   
  constructor() { }

  ngOnInit(): void {
    
  }


  

  //uploade image

  uploadImage(event:any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      // do something with the file
    }
  }

  
  
}
