import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ContentCardsService } from './content-cards.service';

describe('ContentCardsService', () => {
  let service: ContentCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [ContentCardsService]
    });
    service = TestBed.inject(ContentCardsService);
  });

  it('Criado ContentCardService', () => {
    expect(service).toBeTruthy();
  });
});
