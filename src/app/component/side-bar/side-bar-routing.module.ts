import { DashbordComponent } from './../dashbord/dashbord.component';
import { UtilisateurComponent } from './../utilisateur/utilisateur.component';
import { AutoEcoleComponent } from './../auto-ecole/auto-ecole.component';
import { QuizComponent } from './../quiz/quiz.component';
import { CoursComponent } from './../cours/cours.component';
import { SideBarComponent } from './side-bar.component';
import { DetailUtilisateurComponent } from './../detail-utilisateur/detail-utilisateur.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeComponent } from '../vehicule/vehicule.component';
const routes: Routes = [
    { 
        path: 'side-bar', component: SideBarComponent,
        children:[
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
              },
            
              {
                path:'dashboard', component:DashbordComponent
              },
              {
                path:'utilisateur', component:UtilisateurComponent
              },
              {
                path:'auto-ecole', component:AutoEcoleComponent
              },
              {
                path:'quiz', component:QuizComponent
              },
              {
                path:'cours', component:CoursComponent
              },
              {
                path:'vehicule', component:VehiculeComponent
              }
              ,
              
              {
                path:'utilisateur/detail-utilisateur', component:DetailUtilisateurComponent
              },
              { path: '**', redirectTo:'dashboard',pathMatch:'full'}
        ]
 }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SiedBarRoutingModule { }
    