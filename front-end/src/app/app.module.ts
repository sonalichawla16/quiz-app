import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
//services 
import {HttpWrapperService} from './services/http-wrapper.service';
// Components 
import {AppComponent} from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ManageQuizComponent} from './manage-quiz/manage-quiz.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {SampleComponent} from './sample/sample.component';
import {QuizSelectComponent} from './quiz-select/quiz-select.component';
// Material Imports
import {MatButtonModule, MatSelectModule,MatDialogModule,MatCheckboxModule, MatCardModule, MatExpansionModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { CategorySelectComponent } from './category-select/category-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ManageQuizComponent,
    QuizSelectComponent,
    NotFoundComponent,
    SampleComponent,
    QuizComponent,
    CategorySelectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    
    RouterModule.forRoot([
      {
        path: '',
        component: RegisterComponent
      },
    {
      path: 'managequiz',
      component : ManageQuizComponent
    },
    {
      path: 'home' ,
      component: RegisterComponent
    } ,
    {
      path: 'sample' ,
      component: SampleComponent
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
      path: 'login' ,
      component: LoginComponent
    },
    {
      path: '**',
      component: NotFoundComponent
    }
    ]),
    HttpModule
  ],
  providers: [
    HttpWrapperService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
constructor(public dailog:MatDialogModule)
{
  
}
// opendialog()
// {
//   this.dailog.open();
//  }
}
