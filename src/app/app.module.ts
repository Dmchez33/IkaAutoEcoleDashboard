import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DashbordComponent } from './component/dashbord/dashbord.component';
import { MatLegacyPaginatorIntl as MatPaginatorIntl, MatLegacyPaginatorModule as MatPaginatorModule } from '@angular/material/legacy-paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { paginationPersonnalise } from './paginationPersonnalise';
import { UtilisateurComponent } from './component/utilisateur/utilisateur.component';
import { QuizComponent } from './component/quiz/quiz.component';
import { CoursComponent } from './component/cours/cours.component';
import { VehiculeComponent } from './component/vehicule/vehicule.component';
import { AutoEcoleComponent } from './component/auto-ecole/auto-ecole.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DetailUtilisateurComponent } from './component/detail-utilisateur/detail-utilisateur.component';
import { UtilisateurRoutingModule } from './component/utilisateur/utilisateur-routing.module';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { SiedBarRoutingModule } from './component/side-bar/side-bar-routing.module';
import { DetailCoursComponent } from './component/detail-cours/detail-cours.component';
import { HttpClientModule, HttpInterceptor } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import {
  AvatarModule,
  BadgeModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FormModule,
  GridModule,
  HeaderModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { QuestionComponent } from './component/question/question.component';
import { AuthIntercept } from './httpIntercept/auth.intercept';
import { DetailPanneauxComponent } from './component/detail-panneaux/detail-panneaux.component';
import { VideosComponent } from './component/videos/videos.component';
import { DashboardAdminAutoEcoleComponent } from './component/dashboard-admin-auto-ecole/dashboard-admin-auto-ecole.component';
@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    DashbordComponent,
    UtilisateurComponent,
    QuizComponent,
    CoursComponent,
    VehiculeComponent,
    AutoEcoleComponent,
    MenuBarComponent,
    DetailUtilisateurComponent,
    SideBarComponent,
    DetailCoursComponent,
    QuestionComponent,
    DetailPanneauxComponent,
    VideosComponent,
    DashboardAdminAutoEcoleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSidenavModule,
    LeafletModule,
    ReactiveFormsModule,
    MatSortModule,
    FormsModule,
    Ng2SearchPipeModule,
    UtilisateurRoutingModule,
    SiedBarRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    AvatarModule,
    BadgeModule,
    ButtonGroupModule,
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    NavModule,
    ProgressModule,
    TableModule,
    TabsModule,
    DropdownModule,
    HeaderModule,
    NgxYoutubePlayerModule,
    NgMultiSelectDropDownModule
  ], 
  providers: [ { provide: MatPaginatorIntl, useClass: paginationPersonnalise}, AuthIntercept],
  bootstrap: [AppComponent]
})
export class AppModule { }
