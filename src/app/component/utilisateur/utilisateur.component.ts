import { UtilisateurService } from './../../service/utilisateur/utilisateur.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {


  title = "Utilisateur"



  recherche: any;
  pageEvent: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  allPersons: any[] = [
    { nom: "Dembele", prenom: 'Idrissa', telephone: "+22383252448" },
    { nom: "Coulibaly", prenom: 'Alima', telephone: "+22390457890" },
    { nom: "Diakité", prenom: 'Assétou', telephone: "+223783290" },
    { nom: "Konaté", prenom: 'Hamidou', telephone: "+22389032456" },
    { nom: "Kanté", prenom: 'Youssouf', telephone: "+22389673490" },
    { nom: "konté", prenom: 'Moumi', telephone: "+22390784567" },
    { nom: "Diallo", prenom: 'Kalifa', telephone: "+22389567890" },
    { nom: "Diourté", prenom: 'Lamine', telephone: "+22366789056" },
  ];
  persons: any[] = this.allPersons;
  length = this.persons.length;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  username: any;
  email: any;
  password: any;
  telephone: any;
  file: any;

  ngAfterViewInit() {
    this.paginator!.page
      .subscribe(
        (event: any) => {
          this.persons = this.allPersons.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
        });

  }


  constructor(private serviceUtilisateur: UtilisateurService) { }

  ngOnInit(): void {

  }




  //uploade image

  uploadImage(event: any) {
    if (event.target.files.length > 0) {
       this.file = event.target.files[0];
      // do something with the file
    }
  }

  postAdminAutoEcole() {

    const donnee = {
      "username": this.username,
      "email": this.email,
      "password": this.password,
      "telephone": this.telephone
    }


  }


}


