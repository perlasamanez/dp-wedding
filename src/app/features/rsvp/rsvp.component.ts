import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component'
import { NavComponent } from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent
  ],
  templateUrl: './rsvp.component.html',
  styleUrl: './rsvp.component.css'
})
export class RsvpComponent {

}
