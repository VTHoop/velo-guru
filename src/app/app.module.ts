import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeSplashComponent } from './home/home-splash/home-splash.component';
import { HomeAboutUsComponent } from './home/home-about-us/home-about-us.component';
import { HomeFeaturesComponent } from './home/home-features/home-features.component';
import { HomeComponent } from './home/home.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { BikeInfoComponent } from './bike-info/bike-info.component';
import { BikeTypesComponent } from './bike-info/bike-types/bike-types.component';

import { environment } from '../environments/environment';
import { BikeListComponent } from './bike-list/bike-list.component';
import { AddBikeComponent } from './add-bike/add-bike.component';
import { AngularFireModule } from '@angular/fire';
import { BikesService } from '../shared/services/bikes.service';

@NgModule({
  declarations: [
    AddBikeComponent,
    AppComponent,
    HomeComponent,
    HomeSplashComponent,
    HomeAboutUsComponent,
    HomeFeaturesComponent,
    NavButtonComponent,
    BikeInfoComponent,
    BikeTypesComponent,
    BikeListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [BikesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
