import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CardService } from './card.service';

describe('CardService', () => {
  let service: CardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [CardService]
    });
    service = TestBed.inject(CardService);
  });

  it('Criado Card Service', () => {
    expect(service).toBeTruthy();
  });
});
