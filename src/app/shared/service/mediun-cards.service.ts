import { Injectable, Injector } from '@angular/core';
import { MediunCard } from '../models/mediun-card.model';
import { BaseRecursoService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class MediunCardsService extends BaseRecursoService<MediunCard> {

  constructor(protected override injector: Injector) {
    super("api/mediunCards", injector, MediunCard.fromJson);
   }
}
