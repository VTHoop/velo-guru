import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bike-types',
  templateUrl: './bike-types.component.html',
  styleUrls: ['./bike-types.component.scss']
})
export class BikeTypesComponent implements OnInit {
  @ViewChild('road') public road: ElementRef;

  constructor() {}

  ngOnInit() {}

  public moveToRoad(): void {
    this.road.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'start'
    });
  }
}
