import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chistmas',
  templateUrl: './chistmas.page.html',
  styleUrls: ['./chistmas.page.scss'],
})
export class ChistmasPage implements OnInit {
  active = false;
  popup = false;
  shadow = false;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 500);
  }
  show() {
    this.popup = !this.popup;
    this.shadow = !this.shadow;
  }
  cancel(){
    this.popup = false;
    this.shadow = false;
  }
}
