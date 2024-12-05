import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component'
import { NavComponent } from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

  fact = 'We both love Lomo Saltado';

  getRandomFact() { 
    const facts = [
      'Our height difference is 7 inches',
      'Potatoes? 2 Please',
      'We have travelled to Peru and Colombia',
      'We love karaoke',
      'We are in the same Peruvian dance group',
      'We eat pizza every Friday',
      'We are both blind',
      'On our first date we watched Spiderman: Into the Spider-Verse',
      'We are the same age (Perla is older by 21 days)',
      'We both used to make home videos growing up',
      'We love dogs',
      'We like mangoes'
    ]
    const randomIndex = Math.floor(Math.random() * facts.length); 
    this.fact = facts[randomIndex];
  }
}
