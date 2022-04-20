import { TestBed } from '@angular/core/testing';

import { ContentCardsService } from './content-cards.service';

describe('ContentCardsService', () => {
  let service: ContentCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
