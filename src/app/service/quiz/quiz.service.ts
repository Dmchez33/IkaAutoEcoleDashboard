import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const HTTP_QUIZ = `http://localhost:8080/api/quiz/`

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }
  //GET ALL QUIZ
  getAllQuiz():Observable<any>{
    return this.http.get(HTTP_QUIZ+`getAllQuiz`);
  }
  //GET QUIZ BY ID
  getQuizById(quizId:any):Observable<any>{
    return this.http.get(HTTP_QUIZ+`getQuizById/${quizId}`);
  }
  //POST QUIZ
  AjouterQuiz(titreQuiz:String, descriptionQuiz:String, imageQuiz:File):Observable<any>{
    let data = new FormData()

    let quiz = [{
      'titre':titreQuiz,
      'description':descriptionQuiz,
    }]

    data.append('image',imageQuiz);
    data.append('quiz', JSON.stringify(quiz).slice(1, JSON.stringify(quiz).lastIndexOf(']')))

    return this.http.post(HTTP_QUIZ+`ajouterQiuz`,data)
  }
  //UPDATE QUIZ
  //DELETE QUIZ

  //*****************LES PARTIES QUESTION ********** */
  //METHODE AJOUTER
  postQuestion(questionposer:String, quiz:any, imagequestion:File):Observable<any>{
    let data = new FormData()

    let question = [{
      'question':questionposer,
      'quiz':
      {
        'id':quiz
      }

    }]

    data.append('image',imagequestion);
    data.append('question', JSON.stringify(question).slice(1, JSON.stringify(question).lastIndexOf(']')))

    return this.http.post(HTTP_QUIZ+`ajouterQuestion`,data)
  }

  //GET ALL QUESTION
  getQuestion():Observable<any>{
    return this.http.get(HTTP_QUIZ+`getAllQuestion`);
  }

  //GET QUESTION BY ID
  getQuestionById(id:any):Observable<any>{
    return this.http.get(HTTP_QUIZ+`getQuestionById/${id}`);
  }

  //*****************METHODE CONCERNANT LES REPONSES********** */
  //GET ALL REPONSE
  gettAllReponse():Observable<any>{
    return this.http.get(HTTP_QUIZ+`getAllReponse`);
  }

  //GET ALL REPONSE
  gettReponseById(id:any):Observable<any>{
    return this.http.get(HTTP_QUIZ+`getReponseById/${id}`);
  }

  //GET ALL REPONSE
  gettReponseByIdQuestion(id:any):Observable<any>{
    return this.http.get(HTTP_QUIZ+`getReponseByIdQuestion/${id}`);
  }
  //METHODE AJOUTER
  postReponse(reponseDoner:String, iscorrect:any, idquestion:any):Observable<any>{
    let data = new FormData();

    let reponse = [{

      'question': {
        'id':idquestion
      },
      'iscorrect': iscorrect,
      'reponse': reponseDoner

    }]
    console.log(reponse);
    
    data.append('reponse', JSON.stringify(reponse).slice(1, JSON.stringify(reponse).lastIndexOf(']')))

    return this.http.post(HTTP_QUIZ+`ajouterReponse`,data)
  }

  //SUPPRESSION DE LA REPONSE
  deleteReponseById(id:any):Observable<any>{
    return this.http.delete(HTTP_QUIZ+`deleteReponse/${id}`);
  }
}
