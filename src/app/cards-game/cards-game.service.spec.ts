import { TestBed } from '@angular/core/testing';

import { CardsGameService } from './cards-game.service';

describe('CardsGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardsGameService = TestBed.get(CardsGameService);
    expect(service).toBeTruthy();
  });
});
