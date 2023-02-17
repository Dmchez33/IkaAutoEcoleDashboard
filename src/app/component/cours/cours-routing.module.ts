import { DetailCoursComponent } from './../detail-cours/detail-cours.component';
import { CoursComponent } from './cours.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPanneauxComponent } from '../detail-panneaux/detail-panneaux.component';
const routes: Routes = [
    { 
        path: 'cours', component: CoursComponent,
        children:[
            {
                path:'detail-cours/:id', component: DetailCoursComponent
            },
            {
                path:'detail-panneaux/:id', component: DetailPanneauxComponent
            }
        ]
 }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class CoursRoutingModule { }
