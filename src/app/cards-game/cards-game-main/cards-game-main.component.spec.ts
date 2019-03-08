import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsGameMainComponent } from './cards-game-main.component';

describe('CardsGameMainComponent', () => {
  let component: CardsGameMainComponent;
  let fixture: ComponentFixture<CardsGameMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsGameMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsGameMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
