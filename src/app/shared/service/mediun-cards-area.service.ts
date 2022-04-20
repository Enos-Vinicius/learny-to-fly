import { Injectable, Injector } from '@angular/core';
import { MediunCardArea } from '../models/mediun-card-area-model';
import { BaseRecursoService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class MediunCardsAreaService extends BaseRecursoService<MediunCardArea>{

  constructor(protected override injector: Injector) {
    super("api/mediunCardsArea", injector, MediunCardArea.fromJson);
   }
}
