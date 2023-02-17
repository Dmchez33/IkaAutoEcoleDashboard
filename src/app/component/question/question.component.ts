import { data } from 'jquery';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { QuizService } from './../../service/quiz/quiz.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  title ="Detail-question"
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
  
  questionById: any;
  idquestion:any;

  constructor(private navigate: Location,private serviceQuiz: QuizService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.idquestion = this.route.snapshot.params['id'];
    console.log(this.idquestion);
    
    this.serviceQuiz.gettReponseByIdQuestion(this.idquestion).subscribe(data =>{
      this.allreponse = data
      console.log(data)
    });

    this.serviceQuiz.getQuestionById(this.idquestion).subscribe(data =>{
      console.log(data);
      this.questionById = data;
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

  

  

//uploade vocal




  //METHODE PERMETANT D'OBTENIR TOUT LE Question
  getAllReponse() {
    console.log("cour ajouter")
    this.serviceQuiz.gettAllReponse().subscribe(data =>{
      this.allreponse = data
      console.log(data)
    });
  }

  //METHODE PERMETTANT D'AJOUTER DU CONTENU
  ajouterQuiz(){
    this.serviceQuiz.AjouterQuiz(this.titreQuiz,this.descriptionQuiz,this.imageQuizs).subscribe(
      data =>{
        if(data.message == 'Ok'){
          this.popUp();
         this.getAllReponse();
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
              confirmButtonColor: '#1A237E',
              showDenyButton: false,
              showCancelButton: false,
              allowOutsideClick: false
            })
         
        }
      }
    )
    
  }

  //METHODE PERMETTANT D'AJOUTER DU QUESTION
  // ajouterQuestion(){
  //   console.log("bonjour")
  //   this.serviceQuiz.postQuestion(this.question,this.reponseQuestion,this.imagequestion).subscribe(
  //     data =>{
  //       console.log(data)
  //     }
  //   )
  // }

  //METHODE PERMETTANT D'AJOUTER DU QUESTION
  ajouterReponse(){
    console.log("bonjour")
    
    this.serviceQuiz.postReponse(this.reponse,this.iscorrest,this.idquestion).subscribe(
      data =>{
        if(data.message == 'Ok'){
          this.popUp();
         this.getAllReponse();
        }else{
          
            Swal.fire({
              title: ' ERREUR !!',
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
      text: 'Reponse ajouté avec succes',
      heightAuto: false,
      showConfirmButton: true,
      confirmButtonText: "D'accord",
      confirmButtonColor: '#1A237E',
      showDenyButton: false,
      showCancelButton: false,
      allowOutsideClick: false
    })
  }

  goback(){
    this.navigate.back();
  }

  //METHODE PERMETTANT DE SUPPRIMER UNE REPONSE PAR SON ID
  deleteReponseById(id:any){
    this.serviceQuiz.deleteReponseById(id).subscribe(data =>{
      if(data.message == 'Ok'){
        this.getAllReponse();
        Swal.fire({
          title: 'Félicitation !!',
          text: 'Reponse supprimée avec succes',
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
          title: ' ERREUR !!',
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

  SuppressionModal(id:any){
    Swal.fire({
      title: "Voulez vous vraiment suprimer?",
      showConfirmButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: '#FF0000',
      heightAuto: false
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteReponseById(id);

          
    }
  });
  }
}
