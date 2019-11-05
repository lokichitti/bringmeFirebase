import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //constructor() {}
  text = 'first text';
  FnChangeText() {
    this.text = 'text changed as the above see it, it is very clear can you?';
  }

}
