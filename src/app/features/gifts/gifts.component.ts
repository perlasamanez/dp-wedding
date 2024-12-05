import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/components/footer/footer.component'
import { NavComponent } from '../../shared/components/nav/nav.component';

@Component({
  selector: 'app-gifts',
  standalone: true,
  imports: [
    FooterComponent,
    NavComponent
  ],
  templateUrl: './gifts.component.html',
  styleUrl: './gifts.component.css'
})
export class GiftsComponent {

}
