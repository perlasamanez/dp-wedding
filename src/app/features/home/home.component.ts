import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component'
import { NavComponent } from '../../shared/components/nav/nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent,
    RouterModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  countDownDate = new Date("April 5, 2025").getTime();
  daysLeft = 0;
  daysString = ' Days';

  constructor() { }

  ngOnInit(): void {
  }

  x = setInterval(() => {
    let now = new Date().getTime();
    let distance = this.countDownDate - now;
    this.daysLeft = Math.floor(distance/(1000*60*60*24));
    if (this.daysLeft == 1) {
      this.daysString = ' Day'
    }
    if (distance < 0) {
      clearInterval(this.x);
      this.daysLeft = 0;
    }
  })

}
