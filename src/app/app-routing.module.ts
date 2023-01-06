import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoEcoleComponent } from './component/auto-ecole/auto-ecole.component';
import { CoursComponent } from './component/cours/cours.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { VehiculeComponent } from './component/vehicule/vehicule.component';

const routes: Routes = [
  {
    path:'', component:DashbordComponent
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
