import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl,AbstractControl, ValidatorFn  } from '@angular/forms';
import { Router } from '@angular/router';
import libphonenumber from 'google-libphonenumber';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

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

export class PhoneValidator {

  // Inspired on: https://github.com/yuyang041060120/ng2-validation/blob/master/src/equal-to/validator.ts
 static validCountryPhone = (countryControl: AbstractControl): ValidatorFn => {
   let subscribe: boolean = false;

   return (phoneControl: AbstractControl): {[key: string]: boolean} => {
     if (!subscribe) {
       subscribe = true;
       countryControl.valueChanges.subscribe(() => {
         phoneControl.updateValueAndValidity();
       });
     }
     if(phoneControl.value !== ""){
       try{
         const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();
         let phoneNumber = "" + phoneControl.value + "",
             region = countryControl.value.iso,
             number = phoneUtil.parse(phoneNumber, region),
             isValidNumber = phoneUtil.isValidNumber(number);
         if(isValidNumber){
           return null;
         }
       }catch(e){
         return {
           validCountryPhone: true
         };
       }
       return {
         validCountryPhone: true
       };
     }
     else{
       return null;
     }
   };
 };

 this.country_phone_group = new FormGroup({
  country: new FormControl(this.countries[0], Validators.required),
  phone: new FormControl('', Validators.compose([
  Validators.required,
  PhoneValidator.validCountryPhone(country)
]));
});
}


