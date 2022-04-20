import { TestBed } from '@angular/core/testing';

import { MinCardsService } from './min-cards.service';

describe('MinCardsService', () => {
  let service: MinCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
