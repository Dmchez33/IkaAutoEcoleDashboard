import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CoursService } from 'src/app/service/cours/cours.service';

@Component({
  selector: 'app-detail-panneaux',
  templateUrl: './detail-panneaux.component.html',
  styleUrls: ['./detail-panneaux.component.css']
})
export class DetailPanneauxComponent {
  title = "Détail Panneau"
  idPanneau:any
  detailPanneaux:any;
  constructor(private navigate: Location , private route: ActivatedRoute, private serviceCours: CoursService){
    
  }
  ngOnInit(): void {
    this.idPanneau = this.route.snapshot.params['id'];
    this.serviceCours.getPanneauxById(this.idPanneau).subscribe(data =>{
      this.detailPanneaux = data;
      console.log(this.detailPanneaux);
    })

  }

  goback(){
    this.navigate.back();
  }
}
