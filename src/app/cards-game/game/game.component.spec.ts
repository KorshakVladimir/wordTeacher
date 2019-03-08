import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromUAComponent } from './game.component';

describe('FromUAComponent', () => {
  let component: FromUAComponent;
  let fixture: ComponentFixture<FromUAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromUAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromUAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
