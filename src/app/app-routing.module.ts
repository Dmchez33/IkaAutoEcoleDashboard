import { AuthGuard } from './guard/auth.guard';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { DetailUtilisateurComponent } from './component/detail-utilisateur/detail-utilisateur.component';
import { ConnexionComponent } from './connexion/connexion.component';
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
    path: '',
    redirectTo: 'side-bar/dashboard',
    pathMatch: 'full'
  },
  
  {
    path:'side-bar',canActivate:[AuthGuard], loadChildren: () => import('./component/side-bar/side-bar.module').then((m)=>m.SideBarModule)
  },
  // {
  //   path:'side-bar/dashboard', component:DashbordComponent
  // },
  // {
  //   path:'side-bar/utilisateur', component:UtilisateurComponent
  // },
  // {
  //   path:'side-bar/auto-ecole', component:AutoEcoleComponent
  // },
  // {
  //   path:'side-bar/quiz', component:QuizComponent
  // },
  // {
  //   path:'side-bar/cours', component:CoursComponent
  // },
  // {
  //   path:'side-bar/vehicule', component:VehiculeComponent
  // }
  // ,
  {
    path:'connexion', component:ConnexionComponent
  },
  // {
  //   path:'side-bar/utilisateur/detail-utilisateur', component:DetailUtilisateurComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
