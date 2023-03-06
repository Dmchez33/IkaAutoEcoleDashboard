import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { CoursService } from 'src/app/service/cours/cours.service';
import Swal from 'sweetalert2';
interface IUser {
  name: string;
  state: string;
  registered: string;
  country: string;
  usage: number;
  period: string;
  payment: string;
  activity: string;
  avatar: string;
  status: string;
  color: string;
}

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  title1 = "Cours"
  recherche: any;
  pageEvent1: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  allCours: any;
  
  cours: any;
  length: number = 10;
  contenuCours: any;

  //DECLATION DES ATTRIBUT DES DIFFERENT COOURS
  libelleCours!:string;
  imageCours!:File

  //DECLARATION DES ATTRIBUTS DES DIFFERENTS TABLES CONTENU COURS
  titreCours!:string;
  descriptionCours!:string;
  idCours!:any;
  imageContenu!:any;
  vocalContenu!:any;

  //ATTREIBUTS CONCERNANT LES PANNEAUX

  //POUR PANNEAUX
  nomPanneaux!:any;
  descriptionPanneaux!:any;
  typePanneaux!:any;
  allPanneaux!:any;
  imagePanneaux!:any;
  audioPanneaux!:any;
  //POUR TYPE PANNEAUX
  type!:any;
  allType!:any;
  imageType!:any;


  constructor(private serviceCours: CoursService) { }

  ngOnInit(): void {

    this.serviceCours.listeAllCours().subscribe(data => {
      this.allCours = data
      console.log(data)

    });

    this.serviceCours.listeAllContenuCours().subscribe(data => {
      this.contenuCours = data
      console.log(data);
    });

    //ALL PANNEAUX
    this.serviceCours.gettAllPanneau().subscribe(data =>{
      console.log(data);
      this.allPanneaux = data;
    });

    //ALL TYPE PANNEAUX
    this.serviceCours.getAllTypePanneaux().subscribe(data =>{
      console.log(data);
      this.allType = data;
    });
   
    this.getAllTypePanneaux();

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

  ngAfterViewInit() {
    this.paginator!.page
      .subscribe(
        
        (event: any) => {
          this.cours = this.allCours.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
        });

  }

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];


  //uploade Image Cours

  uploadImage(event: any) {
    if (event.target.files.length > 0) {
       this.descriptionCours = event.target.files[0];
      // do something with the file
    }


  }

//uploade vocal

uploadVocal(event: any) {
  if (event.target.files.length > 0) {
    this.vocalContenu = event.target.files[0];
    // do something with the file
  }


}
//uploade image

uploadImageContenu(event: any) {
  if (event.target.files.length > 0) {
     this.imageContenu = event.target.files[0];
    // do something with the file
  }


}
  //METHODE PERMETANT D'OBTENIR TOUT LE CONTENU DU COURS
  getAllContenu() {
    this.serviceCours.listeAllContenuCours().subscribe(data => {
      this.contenuCours = data
    })
  }

  //METHODE PERMETANT D'OBTENIR TOUT LE CONTENU DU COURS
  getAllCours() {
    console.log("cour ajouter")
    this.serviceCours.listeAllCours().subscribe(data => {
      this.allCours = data;
      
    })
  }

  //METHODE PERMETTANT D'AJOUTER DU CONTENU
  ajouterContenu(){
    this.serviceCours.ajouterContenuCours(this.titreCours,this.descriptionCours, this.imageContenu, this.vocalContenu).subscribe(
      data =>{
        if(data.message == 'Ok'){
          this.popUp();
          this.getAllContenu();
          this.titreCours = '';
          this.descriptionCours = '';
          this.idCours = null;
          this.imageContenu = null;
          this.vocalContenu = null;
        }else{
          
            Swal.fire({
              title: data.message,
              text: 'Cours ajouté avec succes',
              heightAuto: false,
              showConfirmButton: true,
              confirmButtonText: "D'accord",
              confirmButtonColor: '#1A237E',
              showDenyButton: false,
              showCancelButton: false,
              allowOutsideClick: false
            })
         
        }
      }
    )
    
  }
//Acutalise une fois cours ajouter 
aletre(): void {
  setTimeout(() => {
    this.getAllCours();
  }, 1000);
}
  //METHODE PERMETTANT D'AJOUTER DU CONTENU
  ajouterCours(){
    console.log("bonjour")
    this.serviceCours.ajouterCours(this.libelleCours,this.imageCours).subscribe(data =>{
      if(data.message == 'Ok'){
        this.popUpCours();
        this.libelleCours = '';
        this.getAllCours();
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
      //this.aletre();
    })
    
  }

  //***************LES METHODE SUR LE PANNEAU DE LA ROUTE */

  uploadVocalPanneau(event: any) {
    if (event.target.files.length > 0) {
      this.audioPanneaux = event.target.files[0];
      // do something with the file
    }
  
  
  }
  //uploade image
  
  uploadImagePanneau(event: any) {
    if (event.target.files.length > 0) {
       this.imagePanneaux = event.target.files[0];
      // do something with the file
    }
  
  
  }

  uploadImageTypePanneau(event: any) {
    if (event.target.files.length > 0) {
       this.imageType = event.target.files[0];
      // do something with the file
    }
  
  
  }

  //GET ALL
  getAllPanneaux(){
    this.serviceCours.gettAllPanneau().subscribe(data =>{
      console.log(data);
      this.allPanneaux = data;
    })

  }
  //AD PANNEAUX
  postPanneaux(){
    console.log(this.typePanneaux);
    this.serviceCours.ajouterPanneaux(this.nomPanneaux, this.descriptionPanneaux,this.typePanneaux, this.imagePanneaux,this.audioPanneaux).subscribe(
      data =>{
        if(data.message == 'Ok'){
          
          this.popUpPanneaux();
          this.getAllPanneaux();
          
          this.nomPanneaux = '';
          this.descriptionPanneaux = '';
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

  //GETALLTYPEPANNEAUX
  getAllTypePanneaux(){
    this.serviceCours.getAllTypePanneaux().subscribe(data =>{
      console.log(data);
      this.allType = data;
    });
  }
  //POSTTYPEPANNEAUX
  postTypePanneaux(){
    this.serviceCours.addTypePanneaux(this.type,this.imageType).subscribe(data =>{
      if(data.message == 'Ok'){
        this.popUpTypePanneaux()
        this.getAllPanneaux();
        this.type = '';
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

  //POPUP UTILISER POUR ENREGISTRE UN COURS
  popUp() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Cours ajouté avec succes',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "D'accord",
      confirmButtonColor: '#1A237E',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    })
  }

  popUpCours() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Cours ajouté avec succes',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "D'accord",
      confirmButtonColor: '#1A237E',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    })
  }

  popUpTypePanneaux() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Le catégorie du panneau ajouté avec succes',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "D'accord",
      confirmButtonColor: '#1A237E',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    })
  }

  popUpPanneaux() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Panneau ajouté avec succes',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "D'accord",
      confirmButtonColor: '#1A237E',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    })
  }
}
