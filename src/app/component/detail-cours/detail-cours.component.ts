import { CoursService } from 'src/app/service/cours/cours.service';
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-cours',
  templateUrl: './detail-cours.component.html',
  styleUrls: ['./detail-cours.component.css']
})
export class DetailCoursComponent implements OnInit {
  title = "Détail Cours"
  idcontenuCours:any
  detailCours:any;
  constructor(private navigate: Location , private route: ActivatedRoute, private serviceCours: CoursService){
    
  }
  ngOnInit(): void {
    this.idcontenuCours = this.route.snapshot.params['id'];
    this.serviceCours.listeAllContenuCoursById(this.idcontenuCours).subscribe(data =>{
      this.detailCours = data;
      console.log(this.detailCours.image);
    })

  }

  goback(){
    this.navigate.back();
  }


}
