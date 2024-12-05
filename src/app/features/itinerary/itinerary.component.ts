import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component'
import { NavComponent } from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-itinerary',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent
  ],
  templateUrl: './itinerary.component.html',
  styleUrl: './itinerary.component.css'
})
export class ItineraryComponent {

}
