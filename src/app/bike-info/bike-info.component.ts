import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.scss']
})
export class BikeInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  diveDeeper(route: string): void {
    this.router.navigate([`/bike-info/${route}`]);
  }
}
