import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydeveloperNgforComponent } from './busydeveloper-ngfor.component';

describe('BusydeveloperNgforComponent', () => {
  let component: BusydeveloperNgforComponent;
  let fixture: ComponentFixture<BusydeveloperNgforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydeveloperNgforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydeveloperNgforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
