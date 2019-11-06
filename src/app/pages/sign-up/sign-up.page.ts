import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';

  validation_messages = {
    'name':[
      { type: 'required', message: 'Name is required' },
    ],
   'email': [
     { type: 'required', message: 'Email is optional you can leave it blank.' },
     { type: 'pattern', message: 'Please enter a valid email.' }
   ],
   'password': [
     { type: 'required', message: 'Password is required.' },
     { type: 'minlength', message: 'Password must be at least 5 characters long.' }
   ],
   'phone': [
    { type: 'required', message: 'Phone number is required.' },
    { type: 'pattern', message: 'Please enter only digits.' },
    { type: 'minLength', message: 'Phone number should be 10 digits' },
    { type: 'maxLength', message: 'Phone number should be 10 digits' }
    
  ],
  'country': [
    { type: 'required', message: 'Country is required.' },
    { type: 'pattern', message: 'Please enter a valid email.' }
  ]
 };
 constructor(
  //private authService: AuthService,
  private formBuilder: FormBuilder,
  private router: Router
) { }

ngOnInit() {
  this.validations_form = this.formBuilder.group({
    name: new FormControl('', Validators.compose([
      Validators.required
      ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ])),
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
    phone: new FormControl('', Validators.compose([
      Validators.required,
      Validators.minLength(10),
      Validators.minLength(10),
      Validators.pattern('0-9'),
    ])),
    country: new FormControl('', Validators.compose([
      Validators.pattern('a-zA-Z'),
      Validators.required
    ]))
  });
}

goLoginPage(){
  this.router.navigate(["/login"]);
}

}
