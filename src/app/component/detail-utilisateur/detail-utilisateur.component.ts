import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-detail-utilisateur',
  templateUrl: './detail-utilisateur.component.html',
  styleUrls: ['./detail-utilisateur.component.css']
})
export class DetailUtilisateurComponent {
  title = "Détail utilisateur"
  constructor(private navigate: Location , private route: ActivatedRoute){

  }

  goback(){
    this.navigate.back();
  }
}
