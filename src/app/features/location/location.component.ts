import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component'
import { NavComponent } from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent
  ],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent {

}
