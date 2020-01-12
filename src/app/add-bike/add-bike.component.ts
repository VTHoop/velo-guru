import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike.model';
import { BikesService } from '../../shared/services/bikes.service';

@Component({
  selector: 'app-add-bike',
  templateUrl: './add-bike.component.html',
  styleUrls: ['./add-bike.component.scss']
})
export class AddBikeComponent implements OnInit {
  brands = ['Canyon', 'Felt', 'Trek', 'Specialized', 'Giant'];
  categories = ['Road', 'Mountain'];
  subcategories = ['Race', 'Gravel', 'Endurance', 'Aero'];
  materials = ['Carbon', 'Aluminum', 'Steel'];
  levels = ['Professional', 'Upper', 'Mid', 'Entry'];
  brakeTypes = ['Rim', 'Disc'];

  submitted = false;

  bike = new Bike(null, '', '', '', '', '', '', '', '', 0, '', '', '');

  newBikes = [];

  constructor(private bikesService: BikesService) {}

  ngOnInit() {}

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);

    const data: object = this.bike;
    this.bikesService.createBike(data).then(res => {
      console.log('bike created');
    });
  }
}
