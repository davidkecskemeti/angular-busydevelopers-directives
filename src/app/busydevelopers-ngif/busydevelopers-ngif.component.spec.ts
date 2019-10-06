import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydevelopersNgifComponent } from './busydevelopers-ngif.component';

describe('BusydevelopersNgifComponent', () => {
  let component: BusydevelopersNgifComponent;
  let fixture: ComponentFixture<BusydevelopersNgifComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydevelopersNgifComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydevelopersNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
