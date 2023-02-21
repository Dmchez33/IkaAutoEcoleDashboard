import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const HTTP_Admin = `http://localhost:8080/api/adminAutoEcole/`
const HTTP_APRENANT = `http://localhost:8080/api/apprenant/`

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  //GET ALL PROPRIETAIRE AUTOECOLE
  getAllProprietaire(): Observable<any> {
    return this.http.get(HTTP_Admin + `getAll`)
  }
  //GET ALL APPRENANT
  getAllApprenant(): Observable<any> {
    return this.http.get(HTTP_APRENANT + `getapprenant`)
  }
  //GET ALL APPRENANT PAR AUTOECOLE
  //POST PROPRIETAIRE AUTOECOLE
  postAdmin(donneeAdmin: any, file: any): Observable<any> {
    let donne = new FormData();
    let data = [
      donneeAdmin
    ]
    donne.append('file', file)
    donne.append('data', JSON.stringify(data).slice(1, JSON.stringify(data).lastIndexOf(']')))

    return this.http.post(HTTP_Admin + `createUtilisateur`, donne);

  }

  //POST APPRENANT 
  postApprenant(username: any, email: any, password: any, nom: any, prenom: any, telephone: any): Observable<any> {
    let data = new FormData();
    let apprenant =
    {

      "username": username,
      "email": email,
      "password": password,
      "nom": nom,
      "prenom": prenom,
      "telephone": telephone
    }

    data.append('apprenant', JSON.stringify(apprenant).slice(1, JSON.stringify(apprenant).lastIndexOf(']')));

    return this.http.post(HTTP_APRENANT + `save`, apprenant)
  }
  //UPDATE PROPRIETAIRE AUTOECOLE
  //UPDATE APPRENANT AUTOECOLE
  //DELETE PROPRIETAIRE AUTOECOLE
  //DELETE APPRENANT AUTOECOLE

}
