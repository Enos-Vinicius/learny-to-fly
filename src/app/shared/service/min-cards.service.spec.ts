import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MinCardsService } from './min-cards.service';

describe('MinCardsService', () => {
  let service: MinCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [MinCardsService]
    });
    service = TestBed.inject(MinCardsService);
  });

  it('Criado MinCardsService', () => {
    expect(service).toBeTruthy();
  });
});
