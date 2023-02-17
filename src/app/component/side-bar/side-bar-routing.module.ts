import { DetailPanneauxComponent } from './../detail-panneaux/detail-panneaux.component';
import { QuestionComponent } from './../question/question.component';
import { DetailCoursComponent } from './../detail-cours/detail-cours.component';
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
import { AuthGuard } from 'src/app/guard/auth.guard';
const routes: Routes = [
    { 
        path: 'side-bar', 
        component: SideBarComponent,
        children:[
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
              },
            
              {
                path:'dashboard',canActivate:[AuthGuard], component:DashbordComponent
              },
              {
                path:'utilisateur',canActivate:[AuthGuard], component:UtilisateurComponent
              },
              {
                path:'auto-ecole',canActivate:[AuthGuard], component:AutoEcoleComponent
              },
              {
                path:'quiz',canActivate:[AuthGuard], component:QuizComponent
              },
              {
                path:'quiz/detail-question/:id',canActivate:[AuthGuard], component:QuestionComponent
              },
              {
                path:'cours/detail-panneaux/:id',canActivate:[AuthGuard], component:DetailPanneauxComponent
              },
              {
                path:'cours',canActivate:[AuthGuard], component:CoursComponent
              },
              {
                path:'vehicule',canActivate:[AuthGuard], component:VehiculeComponent
              }
              ,
              {
                path:'cours/detail-cours/:id',canActivate:[AuthGuard], component:DetailCoursComponent
              }
              ,
              
              {
                path:'utilisateur/detail-utilisateur/:id',canActivate:[AuthGuard], component:DetailUtilisateurComponent
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
    