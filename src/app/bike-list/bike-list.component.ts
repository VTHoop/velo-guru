import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Bike } from 'src/models/bike.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.scss']
})
export class BikeListComponent implements OnInit {
  bikes: Observable<any[]>;

  selectedBike: Bike;

  // state
  trayVisible = false;
  brandFilterOpen = false;
  categoryFilterOpen = false;
  materialFilterOpen = false;
  brakeTypeFilterOpen = false;

  brands = [];
  brandFilters = [];
  categoryFilters = [];
  materialFilters = [];
  brakeTypeFilters = [];

  constructor(public db: AngularFirestore) {
    this.bikes = db.collection('Bikes').valueChanges();
    this.bikes.subscribe(bikes => {
      const brandMap = new Map();
      for (const bike of bikes) {
        if (!brandMap.has(bike.brand)) {
          brandMap.set(bike.brand, true);
          this.brandFilters.push(bike.brand);
        }
      }
    });
  }

  ngOnInit() {}

  onBikeClick(bike: Bike) {
    this.selectedBike = bike;
    this.trayVisible = true;
  }

  brandFilterClick() {
    this.brandFilterOpen = !this.brandFilterOpen;
  }

  closeTray() {
    this.trayVisible = false;
  }
}
