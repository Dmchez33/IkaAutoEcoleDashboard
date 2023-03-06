import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const HTTP_COURS = `http://localhost:8080/api/cours/`


const HTTP_PANNEAUX = `http://localhost:8080/api/panneauxCours/`
@Injectable({
  providedIn: 'root'
})
export class CoursService {

  constructor(private http: HttpClient) { }

  //GET ALL COURS
  listeAllCours():Observable<any>{
    return this.http.get(HTTP_COURS+`getCours`);
  }
  //GET COURS BY ID
  listeCoursById(id:number):Observable<any>{
    return this.http.get(HTTP_COURS+`getCours/${id}`);
  }
  //POST COURS
  ajouterCours(libelle:string, file:File):Observable<any>{
    let data = new FormData()

    let cours = [{
      'libelle':libelle
    }]

    data.append('file',file);
    data.append('cours', JSON.stringify(cours).slice(1, JSON.stringify(cours).lastIndexOf(']')))
    return this.http.post(HTTP_COURS+`postCours`,data)
  }

  //UDATE COURS
  //DELETE COURS
  //GET ALL CONTENU COURS
  listeAllContenuCours():Observable<any>{
    return this.http.get(HTTP_COURS+`getContenu`);
  }

   //GET CONTENU COURS BY ID
   listeAllContenuCoursById(id:number):Observable<any>{
    return this.http.get(HTTP_COURS+`getContenu/${id}`);
  }
  //UPDATE CONTENU COURS
  //POST CONTENU COURS
  ajouterContenuCours(titre:string,description:string,  image:File,audio:File):Observable<any>{
    let data = new FormData()

    let contenu = [{
     
      "titre": titre,
      //"description": description,
      // "cours": {
      //     "id": courId
      // }
  }]
  data.append('description',description);
    data.append('file',image);
    data.append('audio',audio);
    data.append('contenu', JSON.stringify(contenu).slice(1, JSON.stringify(contenu).lastIndexOf(']')))
    return this.http.post(HTTP_COURS+`postContenu`,data)
  }
  //DELETE CONTENU COURS

  /***********************LES METHODE UTILISEES POUR LE PANNEAU ******/
  //getAll Panneaux
  gettAllPanneau():Observable<any>{
    return this.http.get(HTTP_PANNEAUX+`getAll`)
  }
  //GetPanneauxById
  getPanneauxById(id:number):Observable<any>{
    return this.http.get(HTTP_PANNEAUX+`getById/${id}`);
  }

  //AJOUTER PANNEAUX

  ajouterPanneaux(titre:string,description:string, typePanneauId:number, image:File,audio:File):Observable<any>{
    let data = new FormData()

    let contenu = [{
     
      "nom": titre,
      "description": description,
      "typePanneaux": {
          "id": typePanneauId
      }
  }]

    data.append('image',image);
    data.append('vocal',audio);
    data.append('panneaux', JSON.stringify(contenu).slice(1, JSON.stringify(contenu).lastIndexOf(']')))
    return this.http.post(HTTP_PANNEAUX+`post`,data)
  }
  
  //GET ALL TYPE PANNEAUX
  getAllTypePanneaux():Observable<any>{
    return this.http.get(HTTP_PANNEAUX+`getAllType`);

  }

  //Post TYPE PANNEAUX
  addTypePanneaux(libelle:string, file:File):Observable<any>{
    let data = new FormData()

    let cours = [{
      'type':libelle
    }]

    data.append('image',file);
    data.append('typePanneaux', JSON.stringify(cours).slice(1, JSON.stringify(cours).lastIndexOf(']')))
    return this.http.post(HTTP_PANNEAUX+`addType`,data)
  }
}
