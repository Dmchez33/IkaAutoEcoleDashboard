import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicule',
  templateUrl: './vehicule.component.html',
  styleUrls: ['./vehicule.component.css']
})
export class VehiculeComponent implements OnInit {
  title = "Véhicule"
  constructor() { }

  ngOnInit(): void {
  }

}
