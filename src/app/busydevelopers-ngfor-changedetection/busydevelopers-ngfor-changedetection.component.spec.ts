import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydevelopersNgforChangedetectionComponent } from './busydevelopers-ngfor-changedetection.component';

describe('BusydevelopersNgforChangedetectionComponent', () => {
  let component: BusydevelopersNgforChangedetectionComponent;
  let fixture: ComponentFixture<BusydevelopersNgforChangedetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydevelopersNgforChangedetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydevelopersNgforChangedetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
