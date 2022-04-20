import { TestBed } from '@angular/core/testing';

import { MediunCardsAreaService } from './mediun-cards-area.service';

describe('MediunCardsAreaService', () => {
  let service: MediunCardsAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediunCardsAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
