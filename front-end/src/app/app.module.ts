import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

// services
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
<<<<<<< HEAD
import {QuizSelectComponent} from './quiz-select/quiz-select.component';
// Material Imports
import {MatButtonModule, MatSelectModule,MatDialogModule,MatCheckboxModule, MatCardModule, MatExpansionModule, MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { CategorySelectComponent } from './category-select/category-select.component';
=======
<<<<<<< HEAD
import { AddQuestionsComponent } from './add-questions/add-questions.component';
=======
import { CategorySelectComponent } from './category-select/category-select.component';
>>>>>>> 54131abe5d6d1715376d45d7b918d2fd7c603840

import {FormsModule , ReactiveFormsModule} from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpWrapperService} from './services/http-wrapper.service';
import {AuthService} from './services/authservice.service';

// Material Imports
import {MatSelectModule, MatFormField, MatButtonModule, MatCheckboxModule, MatRadioModule,
  MatCardModule, MatExpansionModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { PostComponent } from './post/post.component';
import {QuizSelectComponent} from './quiz-select/quiz-select.component';

>>>>>>> 99d80ec88fe3f12cf39804256868ba47e3fcabe2

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    RegisterComponent,
    ManageQuizComponent,
    QuizSelectComponent,
    NotFoundComponent,
    SampleComponent,
<<<<<<< HEAD
    QuizComponent,
    CategorySelectComponent,
=======
<<<<<<< HEAD
    AddQuestionsComponent,
>>>>>>> 99d80ec88fe3f12cf39804256868ba47e3fcabe2
    LoginComponent
=======
    QuizComponent,
    LoginComponent,
    CategorySelectComponent
    PostComponent
>>>>>>> 54131abe5d6d1715376d45d7b918d2fd7c603840
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
    MatRadioModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
<<<<<<< HEAD
=======
    HttpModule,
>>>>>>> 54131abe5d6d1715376d45d7b918d2fd7c603840
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
<<<<<<< HEAD

      path: 'addques' ,
      component: AddQuestionsComponent
    } ,
=======
      path: 'quiz-select',
      component: QuizSelectComponent
    },
>>>>>>> 54131abe5d6d1715376d45d7b918d2fd7c603840
    {
      path:'category-select',
      component:CategorySelectComponent
    },
    {
      path: 'login' ,
      component: LoginComponent
    }, {
      path: 'category' ,
      component : CategorySelectComponent
    },
    {
      path:'post',
      component: PostComponent
    },
      {
      path: '**',
      component: NotFoundComponent
    }
    ]),
    HttpModule
  ],
  providers: [
    HttpWrapperService,
    AuthService
  ],

  bootstrap: [AppComponent]
})

export class AppModule {
constructor(public dailog: MatDialogModule) {
}
<<<<<<< HEAD
// opendialog()
// {
//   this.dailog.open();
//  }
=======
<<<<<<< HEAD
opendialog() {
  this.dailog.open();
 }
=======
// opendialog() {
//   this.dailog.open();
//  }
>>>>>>> 54131abe5d6d1715376d45d7b918d2fd7c603840
>>>>>>> 99d80ec88fe3f12cf39804256868ba47e3fcabe2
}
