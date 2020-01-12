import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeTypesComponent } from './bike-types.component';

describe('BikeTypesComponent', () => {
  let component: BikeTypesComponent;
  let fixture: ComponentFixture<BikeTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
