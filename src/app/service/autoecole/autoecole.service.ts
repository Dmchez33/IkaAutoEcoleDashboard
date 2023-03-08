import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const HTTP_AUTOECOLE = `http://localhost:8080/api/AutoEcole`
@Injectable({
  providedIn: 'root'
})
export class AutoecoleService {

  constructor(private http : HttpClient) { }

  //GET ALL AUTOECOLE
  getAllAutoEcole():Observable<any>{
    return this.http.get(HTTP_AUTOECOLE+`/getAll`);
  }

  //GET AUTOECOLE PAR ID
  getAllAutoEcoleByAdmin(id:any):Observable<any>{
    return this.http.get(HTTP_AUTOECOLE+`/getAutoByAdmin/${id}`);
  }
  //POST AUTOECOLE
  postAutoEcole(telephone:any, nom:any,rue:any,porte:any,vehicule:any,typeCours:any,adresse:any,admin:any):Observable<any>{
    let data = new FormData();
    let auto = {
    
      "nom": nom,
      "status": false,
      
      "porte":porte,
      "rue":rue,
      "telephone":telephone,
      "adresses": [
          
          {
            "id":adresse
          }

          ],
      "vehicules": [
          {
            "id":vehicule
          }
          ],
      "typeCours": [
          {
            "id":typeCours
          }
      ]
      
  }
    return this.http.post(`http://localhost:8080/api/AutoEcole/save/${admin}`,auto);
  }
  //Post Adresse
  postAdresse(ville:any,quartier:any,long:any,lat:any):Observable<any>{
    let donne = {
    
      "ville": ville,
      "quartier": quartier,
      "longitude":long,
      "latitude":lat,

  }
  return this.http.post(`http://localhost:8080/api/AutoEcole/addAdresse`,donne);
  }

  //GETALL ADRESSE
  getAllAdresse():Observable<any>{
    return this.http.get(`http://localhost:8080/api/AutoEcole/getallAdresse`)
  }
  //postVehicule
  postVehicule(typevehicule:any,marque:any,image:any):Observable<any>{
    let data = new FormData()
    let vehicule = [
      {
       
        "typevehicule": typevehicule,
        "marquevehicule": marque
            
    }
    ]
    data.append('image',image)
    data.append('vehicule', JSON.stringify(vehicule).slice(1, JSON.stringify(vehicule).lastIndexOf(']')))

    return this.http.post(`http://localhost:8080/api/AutoEcole/addVehicule`,data);
  }
  //getVehicule
  getAllVehicule():Observable<any>{
    return this.http.get(`http://localhost:8080/api/AutoEcole/getAllVehicule`);
  }

  //Post Type de cours
  postTypeCours(nomcours:any,imageCours:any):Observable<any>{
    let data = new FormData();
    let typeCours = [
      {     
        "nomcours": nomcours
       }
    ]
    data.append('image',imageCours);
    data.append('typeCours',JSON.stringify(typeCours).slice(1, JSON.stringify(typeCours).lastIndexOf(']')))
    return this.http.post(`http://localhost:8080/api/AutoEcole/ajouterTypecours`,data); 
  }

  getTypeCours():Observable<any>{
    return this.http.get(`http://localhost:8080/api/AutoEcole/getAllCours`);
  }

}
