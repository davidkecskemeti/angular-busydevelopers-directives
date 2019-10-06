import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydevelopersNgstyleComponent } from './busydevelopers-ngstyle.component';

describe('BusydevelopersNgstyleComponent', () => {
  let component: BusydevelopersNgstyleComponent;
  let fixture: ComponentFixture<BusydevelopersNgstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydevelopersNgstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydevelopersNgstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
