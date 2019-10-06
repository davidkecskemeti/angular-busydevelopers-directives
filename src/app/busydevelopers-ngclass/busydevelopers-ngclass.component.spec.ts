import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydevelopersNgclassComponent } from './busydevelopers-ngclass.component';

describe('BusydevelopersNgclassComponent', () => {
  let component: BusydevelopersNgclassComponent;
  let fixture: ComponentFixture<BusydevelopersNgclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydevelopersNgclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydevelopersNgclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
