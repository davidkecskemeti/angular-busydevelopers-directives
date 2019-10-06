import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydevelopersHiddenattrComponent } from './busydevelopers-hiddenattr.component';

describe('BusydevelopersHiddenattrComponent', () => {
  let component: BusydevelopersHiddenattrComponent;
  let fixture: ComponentFixture<BusydevelopersHiddenattrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydevelopersHiddenattrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydevelopersHiddenattrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
