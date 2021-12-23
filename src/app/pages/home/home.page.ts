import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('audioOption') audioPlayerRef: ElementRef;
  click = false;
  active = false;
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.active = true;
    }, 500);
  }
  clickCircle() {
    this.click = !this.click;
    if (this.click) {
      this.audioPlayerRef.nativeElement.play();
    } else {
      this.audioPlayerRef.nativeElement.pause();
    }
    setTimeout(async () => {
      await this.router.navigateByUrl('/chistmas');
    }, 2500);
  }
}
