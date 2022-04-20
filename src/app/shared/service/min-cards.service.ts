import { Injectable, Injector } from '@angular/core';
import { MinCard } from '../models/min-card.model';
import { BaseRecursoService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class MinCardsService extends BaseRecursoService<MinCard>{

  constructor(protected override injector: Injector) {
    super("api/minCards", injector, MinCard.fromJson);
   }
}
