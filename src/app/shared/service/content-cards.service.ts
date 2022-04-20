import { Injectable, Injector } from '@angular/core';
import { ContentCard } from '../models/content-card.model';
import { BaseRecursoService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class ContentCardsService extends BaseRecursoService<ContentCard>{

  constructor(protected override injector: Injector) {
    super("api/contentCards", injector, ContentCard.fromJson);
   }
}
