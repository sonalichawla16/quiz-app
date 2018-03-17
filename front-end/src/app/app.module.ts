import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {HomeComponent} from './home/home.component';
import {ManageQuizComponent} from './manage-quiz/manage-quiz.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SampleComponent} from './sample/sample.component';
import {QuizSelectComponent} from './quiz-select/quiz-select.component';
// Material Imports
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatExpansionModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { QuizComponent } from './quiz/quiz.component';
import { CategorySelectComponent } from './category-select/category-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ManageQuizComponent,
    QuizSelectComponent,
    NotFoundComponent,
    SampleComponent,
    QuizComponent,
    CategorySelectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
    {
      path:'managequiz' , 
      component : ManageQuizComponent 
    }, 
    { 
      path:'home' ,
      component:HomeComponent
    } ,
    { 
      path:'sample' ,
      component:SampleComponent
    } ,
    {
      path:'quiz-select',
      component:QuizSelectComponent
    },
    {
      path:'category-select',
      component:CategorySelectComponent
    },
    {
      path:'**',
      component:NotFoundComponent
    }
    ]),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatExpansionModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
