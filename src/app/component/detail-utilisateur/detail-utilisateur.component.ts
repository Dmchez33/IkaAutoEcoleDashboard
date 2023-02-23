import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
import { UtilisateurService } from 'src/app/service/utilisateur/utilisateur.service';
@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent implements OnInit {
  title = "Détail utilisateur"
  allAdmin:any;
  id: any;
  adminById:any
  constructor(private serviceUtilisateur: UtilisateurService, private navigate: Location , private route: ActivatedRoute){

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    console.log(this.id);
    

    this.serviceUtilisateur.getProprietaireById(this.id).subscribe(data =>{
      console.log(data);
      this.adminById = data
    })
  }

  goback(){
    this.navigate.back();
    
  }
}
