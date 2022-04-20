import { Injectable, Injector } from '@angular/core';
import { Card } from '../models/card.model';
import { BaseRecursoService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class CardService extends BaseRecursoService<Card> {

  constructor(protected override injector: Injector) {
    super("api/cards", injector, Card.fromJson);
   }
}
