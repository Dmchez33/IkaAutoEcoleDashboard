import { AutoecoleService } from './../../service/autoecole/autoecole.service';
import { QuizService } from './../../service/quiz/quiz.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { UtilisateurService } from 'src/app/service/utilisateur/utilisateur.service';
@Component({
  selector: 'app-auto-ecole',
  templateUrl: './auto-ecole.component.html',
  styleUrls: ['./auto-ecole.component.css']
})
export class AutoEcoleComponent implements OnInit {
  title="Auto-école"
  recherche: any;
  pageEvent1: any;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  allQuiz: any;
  
  quiz: any;
  length: number = 10;
  contenuCours: any;

  //DECLATION DES ATTRIBUT DES DIFFERENT Quis
  titreQuiz!:string;
  descriptionQuiz!:String;
  imageQuizs!:File
  questionQuiz:any

  //DECLARATION DES ATTRIBUTS DES DIFFERENTS Question
  allquestion!:any;
  question!:any
  imagequestion!:any;

  //DECLARATION DES ATTRIBUTS CONCERNANT LES REPONSES
  allreponse!:any;
  reponse!:any
  iscorrest!:any;
  vocalContenu!:any;
  reponseQuestion: any;


  //DECLARATION DES ATTRIBUTS D'AUTOECOLE
  nomAuto:any
  porte:any;
  rue:any;
  telephone:any;
  autoAdresse:any;
  autoCours:any;
  autoVehicule:any;
  autoAdmin:any;
  autoecole:any;

  //Adresse Attribut
  ville:any;
  quartier:any;
  long:any;
  lat:any;
  adresse:any;

  //VEHICULE
  marquevehicule:any;
  typevehicule:any;
  nomvehicule:any;
  imageVehicule:any;
  vehicule:any;

  //TYPECOURS
  nomcours:any;
  imagecours:any;
  typecours:any;

  //admin
  allAdmin:any;
  
  constructor(private serviceUtilisateur: UtilisateurService,private serviceautoecole: AutoecoleService, private serviceQuiz: QuizService) { }

  ngOnInit(): void {
    this.serviceautoecole.getAllAutoEcole().subscribe(data =>{
      console.log(data)
      this.autoecole = data;
    })

    this.serviceautoecole.getAllAdresse().subscribe(data =>{
      console.log(data)
      this.adresse = data;
    });
    this.serviceautoecole.getAllVehicule().subscribe(data =>{
      console.log(data)
      this.vehicule = data
    });
    this.serviceautoecole.getTypeCours().subscribe(data =>{
      console.log(data)
      this.typecours = data;
    });

    this.serviceUtilisateur.getAllProprietaire().subscribe(
      data =>{
        console.log(data);
        this.allAdmin = data;
      }
    );
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
          this.quiz = this.allQuiz.slice(event.pageIndex * event.pageSize, (event.pageIndex + 1) * event.pageSize);
        });

  }

  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];


  //uploade Image Cours

  uploadImage(event: any) {
    if (event.target.files.length > 0) {
       this.imageVehicule = event.target.files[0];
      // do something with the file
    }


  }

//uploade vocal

uploadImageQuestion(event: any) {
  if (event.target.files.length > 0) {
    this.imagecours = event.target.files[0];
    // do something with the file
  }


}

  getAllVehicule(){
    this.serviceautoecole.getAllVehicule().subscribe(data =>{
      console.log(data)
      this.vehicule = data
    });
  }
getAllTypeCours(){
  this.serviceautoecole.getTypeCours().subscribe(data =>{
    console.log(data)
    this.typecours = data;
  });
  }
  getAllAdresse(){
    this.serviceautoecole.getAllAdresse().subscribe(data =>{
      console.log(data)
      this.adresse = data;
    });
  }
  getAllAutoecole(){
    this.serviceautoecole.getAllAutoEcole().subscribe(data =>{
      console.log(data)
      this.autoecole = data;
    })
  }

  //PostAutoECOLE
  postAutoecole(){
    console.log(
      this.autoAdresse
    )
    console.log(
      this.autoCours
    )
    console.log(
      this.autoAdmin
    )
    
    this.serviceautoecole.postAutoEcole(this.telephone,this.nomAuto,this.rue,this.porte,this.autoVehicule,this.autoCours,this.autoAdresse,this.autoAdmin).subscribe(
     data =>{
      if(data.message = "Ok"){
        this.popUp();
        this.nomAuto = '';
        this.rue = '';
        this.porte = '';
        this.adresse = '';
        this.autoAdmin = '';
        this.autoVehicule = '';
        this.autoCours = '';
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
     }
    )
  }

  //METHODE PERMETTANT DE POSTER UNE ADRESSE
  postAdresse(){
    this.serviceautoecole.postAdresse(this.ville,this.quartier,this.long,this.lat).subscribe(
      data =>{
        if(data.message == 'Ok'){
          this.popUpAdresse();
          this.ville = '';
          this.quartier = '';
          this.long = '';
          this.lat = '';
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
      }
    )
  }
  //METHODE POST VEHICULE
  postVehicule(){
    this.serviceautoecole.postVehicule(this.typevehicule,this.marquevehicule,this.imageVehicule).subscribe(
      data =>{
        if(data.message == 'Ok'){
          this.popUpVehicule();
          //this.nomvehicule = '';
          this.typevehicule = '';
          this.marquevehicule = '';
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
      }
    )
  }
  //METHODE PERMETTANT DE POSTER UN TYPE DE COURS
  postTypeCours(){
    this.serviceautoecole.postTypeCours(this.nomcours,this.imagecours).subscribe(
      data =>{
        if(data.message == 'Ok'){
          this.popUpType();
          this.nomcours = '';
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
      }
    )
  }
  //POPUP UTILISER POUR ENREGISTRE UN COURS
  popUp() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Auto ajouté avec succes',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "D'accord",
      confirmButtonColor: '#1A237E',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    })
  }
  //POPUP UTILISER POUR ENREGISTRE UN Question
  popUpAdresse() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Adresse ajoutée avec succes',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "D'accord",
      confirmButtonColor: '#1A237E',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    })
  }
//POPUP UTILISER POUR ENREGISTRE UN Question
popUpType() {
  Swal.fire({
    title: 'Félicitation !!',
    text: 'Cours ajoutée avec succes',
    heightAuto: false,
    showConfirmButton: true,
    confirmButtonText: "D'accord",
    confirmButtonColor: '#1A237E',
    showDenyButton: false,
    showCancelButton: false,
    allowOutsideClick: false
  })
}

//POPUP UTILISER POUR ENREGISTRE UN Question
popUpVehicule() {
  Swal.fire({
    title: 'Félicitation !!',
    text: 'Véhicule ajoutée avec succes',
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
