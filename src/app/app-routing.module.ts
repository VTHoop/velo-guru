import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { HomeComponent } from './home/home.component';
import { BikeTypesComponent } from './bike-info/bike-types/bike-types.component';
import { BikeListComponent } from './bike-list/bike-list.component';
import { AddBikeComponent } from './add-bike/add-bike.component';

const routes: Routes = [
  {
    path: 'bike-info',
    component: BikeInfoComponent
  },
  {
    path: 'bike-info/bike-types',
    component: BikeTypesComponent
  },
  {
    path: 'add-bike',
    component: AddBikeComponent
  },
  {
    path: 'bike-list',
    component: BikeListComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
