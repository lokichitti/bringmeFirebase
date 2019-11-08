import { Component, OnInit } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  constructor(private firebase: Firebase) { }

  ngOnInit() {
  }

}
