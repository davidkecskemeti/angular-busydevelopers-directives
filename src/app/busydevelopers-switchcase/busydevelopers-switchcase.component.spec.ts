import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydevelopersSwitchcaseComponent } from './busydevelopers-switchcase.component';

describe('BusydevelopersSwitchcaseComponent', () => {
  let component: BusydevelopersSwitchcaseComponent;
  let fixture: ComponentFixture<BusydevelopersSwitchcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydevelopersSwitchcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydevelopersSwitchcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
