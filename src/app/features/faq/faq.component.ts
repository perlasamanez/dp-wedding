import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component'
import { NavComponent } from '../../shared/components/nav/nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent,
    RouterModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

}
