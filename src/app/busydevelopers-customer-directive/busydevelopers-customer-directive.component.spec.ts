import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydevelopersCustomerDirectiveComponent } from './busydevelopers-customer-directive.component';

describe('BusydevelopersCustomerDirectiveComponent', () => {
  let component: BusydevelopersCustomerDirectiveComponent;
  let fixture: ComponentFixture<BusydevelopersCustomerDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydevelopersCustomerDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydevelopersCustomerDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
