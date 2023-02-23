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
    return this.http.get(HTTP_AUTOECOLE+`getAll`);
  }

  //GET AUTOECOLE PAR ID

  //POST AUTOECOLE
  postAutoEcole(nom:any,rue:any,porte:any,long:any,lat:any,vehicule:any,typeCours:any,adresse:any,admin:any):Observable<any>{
    let data = new FormData();
    let auto = {
    
      "nom": nom,
      "status": false,
      "longitude":long,
      "latitude":lat,
      "porte":porte,
      "rue":rue,
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
  postAdresse(ville:any,quartier:any):Observable<any>{
    let donne = {
    
      "ville": ville,
      "quartier": quartier
  }
  return this.http.post(`http://localhost:8080/api/AutoEcole/addAdresse`,donne);
  }

  //postVehicule
  postVehicule(nom:any,typevehicule:any,marque:any,image:any):Observable<any>{
    let data = new FormData()
    let vehicule = [
      {
       
        "nomvehicule": nom,
        "typevehicule": typevehicule,
        "marquevehicule": marque
            
    }
    ]
    data.append('image',image)
    data.append('vehicule', JSON.stringify(vehicule).slice(1, JSON.stringify(vehicule).lastIndexOf(']')))

    return this.http.post(`http://localhost:8080/api/AutoEcole/addVehicule`,data);
  }
  //DELETE AUTOECOLE

  //

}
