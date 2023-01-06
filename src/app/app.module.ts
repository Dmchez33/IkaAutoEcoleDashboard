import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { paginationPersonnalise } from './paginationPersonnalise';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { CoursComponent } from './component/cours/cours.component';
import { VehiculeComponent } from './component/vehicule/vehicule.component';
import { AutoEcoleComponent } from './component/auto-ecole/auto-ecole.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DashbordComponent,
    UtilisateurComponent,
    QuizComponent,
    CoursComponent,
    VehiculeComponent,
    AutoEcoleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule
    
  ],
  providers: [ { provide: MatPaginatorIntl, useClass: paginationPersonnalise}],
  bootstrap: [AppComponent]
})
export class AppModule { }
