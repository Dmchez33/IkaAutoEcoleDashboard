import { QuestionComponent } from './../question/question.component';
import { QuizComponent } from './quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
    { 
        path: 'cours', component: QuizComponent,
        children:[
            {
                path:'detail-question/:id', component: QuestionComponent
            }
        ]
 }
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class QuizRoutingModule { }
