import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MediunCardsService } from './mediun-cards.service';

describe('MediunCardsService', () => {
  let service: MediunCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [MediunCardsService]
    });
    service = TestBed.inject(MediunCardsService);
  });

  it('Criado MediunCardsService', () => {
    expect(service).toBeTruthy();
  });
});
