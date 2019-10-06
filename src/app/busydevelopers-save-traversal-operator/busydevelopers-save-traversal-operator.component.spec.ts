import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusydevelopersSaveTraversalOperatorComponent } from './busydevelopers-save-traversal-operator.component';

describe('BusydevelopersSaveTraversalOperatorComponent', () => {
  let component: BusydevelopersSaveTraversalOperatorComponent;
  let fixture: ComponentFixture<BusydevelopersSaveTraversalOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusydevelopersSaveTraversalOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusydevelopersSaveTraversalOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
