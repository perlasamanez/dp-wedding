import { Routes, ExtraOptions } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutUsComponent } from './features/about-us/about-us.component';
import { ItineraryComponent } from './features/itinerary/itinerary.component';
import { LocationComponent } from './features/location/location.component';
import { GiftsComponent } from './features/gifts/gifts.component';
import { FaqComponent } from './features/faq/faq.component';
import { RsvpComponent } from './features/rsvp/rsvp.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'itinerary', component: ItineraryComponent },
  { path: 'location', component: LocationComponent },
  { path: 'gifts', component: GiftsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'rsvp', component: RsvpComponent }
];

export const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
};