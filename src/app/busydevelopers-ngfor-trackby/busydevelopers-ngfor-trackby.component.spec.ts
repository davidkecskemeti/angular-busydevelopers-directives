import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydevelopersNgforTrackbyComponent } from './busydevelopers-ngfor-trackby.component';

describe('BusydevelopersNgforTrackbyComponent', () => {
  let component: BusydevelopersNgforTrackbyComponent;
  let fixture: ComponentFixture<BusydevelopersNgforTrackbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydevelopersNgforTrackbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydevelopersNgforTrackbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
