import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysDetailsComponent } from './days-details.component';

describe('DaysDetailsComponent', () => {
  let component: DaysDetailsComponent;
  let fixture: ComponentFixture<DaysDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
