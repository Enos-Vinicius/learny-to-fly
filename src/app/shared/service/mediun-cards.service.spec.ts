import { TestBed } from '@angular/core/testing';

import { MediunCardsService } from './mediun-cards.service';

describe('MediunCardsService', () => {
  let service: MediunCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediunCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
