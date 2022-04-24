import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { MediunCardsAreaService } from './mediun-cards-area.service';

describe('MediunCardsAreaService', () => {
  let service: MediunCardsAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [MediunCardsAreaService]
    });
    service = TestBed.inject(MediunCardsAreaService);
  });

  it('Criado MediumCardService', () => {
    expect(service).toBeTruthy();
  });
});
