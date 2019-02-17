import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionsDetailsComponent } from './champions-details.component';

describe('ChampionsDetailsComponent', () => {
  let component: ChampionsDetailsComponent;
  let fixture: ComponentFixture<ChampionsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
