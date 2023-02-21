import { QuizService } from './../../service/quiz/quiz.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
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


  constructor(private serviceQuiz: QuizService) { }

  ngOnInit(): void {

    this.serviceQuiz.getAllQuiz().subscribe(data =>{
      this.allQuiz = data
      console.log(data)
    });

    this.serviceQuiz.getQuestion().subscribe(data =>{
      this.allquestion = data
      console.log(data)
    });
    this.serviceQuiz.gettAllReponse().subscribe(data =>{
      this.allreponse = data
      console.log(data)
    });

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
       this.imageQuizs = event.target.files[0];
      // do something with the file
    }


  }

//uploade vocal

uploadImageQuestion(event: any) {
  if (event.target.files.length > 0) {
    this.imagequestion = event.target.files[0];
    // do something with the file
  }


}

  //METHODE PERMETANT D'OBTENIR TOUT LE CONTENU DU COURS
  getAllQuiz() {
    this.serviceQuiz.getAllQuiz().subscribe(data =>{
      this.allQuiz = data
      console.log(data)
    });
  }

  //METHODE PERMETANT D'OBTENIR TOUT LE Question
  getAllQuestion() {
    console.log("cour ajouter")
    this.serviceQuiz.getQuestion().subscribe(data =>{
      this.allquestion = data
      console.log(data)
    });
  }

  //METHODE PERMETTANT D'AJOUTER DU CONTENU
  ajouterQuiz(){
    this.serviceQuiz.AjouterQuiz(this.titreQuiz,this.descriptionQuiz,this.imageQuizs).subscribe(
      data =>{
        if(data.message == 'Ok'){
          this.popUp();
          this.getAllQuiz();
          this.titreQuiz = '';
          this.descriptionQuiz = '';
          this.imageQuizs ;
          
        }else{
          
            Swal.fire({
              title: ' ERREUR !!',
              text: data.message,
              heightAuto: false,
              showConfirmButton: true,
              confirmButtonText: "D'accord",
              confirmButtonColor: '#6200EE',
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
    this.getAllQuiz();
  }, 1000);
}
  //METHODE PERMETTANT D'AJOUTER DU QUESTION
  ajouterQuestion(){
    console.log("bonjour")
    this.serviceQuiz.postQuestion(this.question,this.questionQuiz,this.imagequestion).subscribe(
      data =>{
        if(data.message == 'Ok'){
          this.popUpquestion();
          this.getAllQuestion();
          this.titreQuiz = '';
          this.descriptionQuiz = '';
          this.imageQuizs ;
          
        }else{
          
            Swal.fire({
              title: ' ERREUR !!',
              text: data.message,
              heightAuto: false,
              showConfirmButton: true,
              confirmButtonText: "D'accord",
              confirmButtonColor: '#6200EE',
              showDenyButton: false,
              showCancelButton: false,
              allowOutsideClick: false
            })
         
        }
      }
    )
  }

  //METHODE PERMETTANT D'AJOUTER DU QUESTION
  // ajouterReponse(){
  //   console.log("bonjour")
  //   this.serviceQuiz.postReponse(this.reponse,this.iscorrest).subscribe(data =>{
  //     console.log(data);
  //   })
  // }

  //POPUP UTILISER POUR ENREGISTRE UN COURS
  popUp() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Quiz ajouté avec succes',
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
  popUpquestion() {
    Swal.fire({
      title: 'Félicitation !!',
      text: 'Question ajoutée avec succes',
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
