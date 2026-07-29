import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Services } from './pages/services/services';
import { LatestEvent } from './pages/latest-event/latest-event';
import { Career } from './pages/career/career';
import path from 'path';
import { CanteenCateringServices } from './pages/catering-services/canteen-catering-services/canteen-catering-services';
import { MobileCatering } from './pages/catering-services/mobile-catering/mobile-catering';
import { CorporateBuffetCatering } from './pages/catering-services/corporate-buffet-catering/corporate-buffet-catering';
import { EventEquipmentRental } from './pages/catering-services/event-equipment-rental/event-equipment-rental';
import { FoodBoxAndRefreshments } from './pages/catering-services/food-box-and-refreshments/food-box-and-refreshments';
import { LatestEventDetail } from './pages/latest-event/latest-event-detail/latest-event-detail';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'contact', component: Contact },
  { path: 'latest-event', component: LatestEvent },
  { path: 'career', component: Career },
  { path: 'canteen-catering-services', component: CanteenCateringServices },
  { path: 'mobile-catering', component: MobileCatering },
  { path: 'corporate-buffet-catering', component: CorporateBuffetCatering },
  { path: 'event-equipment-rental', component: EventEquipmentRental },
  { path: 'food-box-and-refreshments', component: FoodBoxAndRefreshments },
  { path: 'latest-events-detail', component: LatestEventDetail },
  {
    path: 'latest-events-detail/:id',
    component: LatestEventDetail,
  },
];


