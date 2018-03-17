import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {CygrpEmailValidator} from '../customvalidators/cygrpemail.validators';
import {ConfirmPasswordValidators} from '../customvalidators/confirmpassword.validator';



@Component({
  selector: 'app-home',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // form: FormGroup ;
  // constructor(private _formBuilder: FormBuilder) {
  //  }


  roles = [
  {
    id : 1 ,
    value : 'Presentor'},
    {
      id : 2 ,
      value : 'Participant'}];

    form=new FormGroup({
      emailAddress:new FormControl('',
        [
        Validators.required,
        CygrpEmailValidator.onlycygrpallowed

        ]),

      password:new FormControl('',
        [
        Validators.required,
        Validators.minLength(7),
        Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#@$?!_])[a-zA-Z0-9#@$?!_]+$/)

        ]),

      userName:new FormControl('',
        [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/^[a-zA-Z ]+$/)
        ]),

      cgiCode:new FormControl('',
        [
        Validators.required,
        Validators.maxLength(3),
        Validators.pattern(/^[0-9]+$/)
        ]),

      role : new FormControl('',Validators.required ),

      confirmPassword:new FormControl('',
        [
        Validators.required,
        ConfirmPasswordValidators.shouldmatchwithpassword
        ])


    });

    get password()
    {
      return this.form.get('password');
    }

    get userName()
    {
      return this.form.get('userName');
    }

    get emailAddress()
    {
      return this.form.get('emailAddress');
    }

    get cgiCode()
    {
      return this.form.get('cgiCode');
    }

    get confirmPassword()
    {
      return this.form.get('confirmPassword');
    }

    ngOnInit() {
    }

  //}

  submit(form) {
    const loginData = {
      userName : this.form.controls.userName.value as string ,
      emailAddress : this.form.controls.emailAddress.value as string ,
      cgiCode : this.form.controls.cgiCode.value as string,
      role : this.form.controls.role.value as string,
      password : this.form.controls.password.value as string ,
      confirmPassword : this.form.controls.confirmPassword.value as string
    };
    if(this.form.invalid)
    {
      console.log("fill all details");
      
     }
        else
    {
    console.log('username :' + loginData.userName  +
      '   emailAddress: ' + loginData.emailAddress +
      '   cgiCode: '  + loginData.cgiCode +
      '   role: ' + loginData.role +
      '   password :' + loginData.password  +
      '   confirm password :' + loginData.confirmPassword
      );
      

  }

}

}