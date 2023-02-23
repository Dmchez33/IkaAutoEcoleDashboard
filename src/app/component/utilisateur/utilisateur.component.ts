import { UtilisateurService } from './../../service/utilisateur/utilisateur.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatLegacyPaginator as MatPaginator } from '@angular/material/legacy-paginator';
import { MatLegacyTableDataSource as MatTableDataSource } from '@angular/material/legacy-table';
import { PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import Swal from 'sweetalert2';
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
  nom:any;
  prenom:any;
  file: any;

  allAdmin:any;
  allApprenant:any;
  apprenant!:any[];

  ngAfterViewInit() {
    this.paginator!.page
      .subscribe(
        (event: any) => {
          this.persons = this.allPersons.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
        });

  }


  constructor(private serviceUtilisateur: UtilisateurService) { }

  ngOnInit(): void {
    this.serviceUtilisateur.getAllProprietaire().subscribe(
      data =>{
        console.log(data);
        this.allAdmin = data;
      }
    )

    this.serviceUtilisateur.getAllApprenant().subscribe(
      data =>{
        console.log(data);
        this.allApprenant = data;
      }
    )

    this.apprenant =  this.allApprenant
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
      'use strict'

      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      const forms = document.querySelectorAll<HTMLInputElement>('.needs-validation')

      // Loop over them and prevent submission
      Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }

          form.classList.add('was-validated')
        }, false)
      })
    })()

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
      "telephone": this.telephone,
      "nom":this.nom,
      "prenom":this.prenom
    }

    this.serviceUtilisateur.postAdmin(donnee,this.file).subscribe(data =>{
      if(data.message == 'Ok'){
        Swal.fire({
          title: 'Félicitation !!',
          text: 'Admin ajouté avec succes',
          heightAuto: false,
          showConfirmButton: true,
          confirmButtonText: "D'accord",
          confirmButtonColor: '#1A237E',
          showDenyButton: false,
          showCancelButton: false,
          allowOutsideClick: false
        })
      }else{
        Swal.fire({
          title: 'Alerte !!',
          text: data.message,
          heightAuto: false,
          showConfirmButton: true,
          confirmButtonText: "D'accord",
          confirmButtonColor: '#1A237E',
          showDenyButton: false,
          showCancelButton: false,
          allowOutsideClick: false
        })
      }
    })


  }

  postApprenant(){
    this.serviceUtilisateur.postApprenant(this.username,this.email,this.password,this.nom,this.prenom,this.telephone).subscribe(data =>{
      if(data.message == 'Ok'){
        Swal.fire({
          title: 'Félicitation !!',
          text: 'Utilisateur ajouté avec succes',
          heightAuto: false,
          showConfirmButton: true,
          confirmButtonText: "D'accord",
          confirmButtonColor: '#1A237E',
          showDenyButton: false,
          showCancelButton: false,
          allowOutsideClick: false
        })
      }else{
        Swal.fire({
          title: 'Alerte !!',
          text: data.message,
          heightAuto: false,
          showConfirmButton: true,
          confirmButtonText: "D'accord",
          confirmButtonColor: '#1A237E',
          showDenyButton: false,
          showCancelButton: false,
          allowOutsideClick: false
        })
      }
    })
  }


}


