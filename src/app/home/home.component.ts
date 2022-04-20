import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/service/card.service';
import { ContentCardsService } from '../shared/service/content-cards.service';
import { MediunCardsAreaService } from '../shared/service/mediun-cards-area.service';
import { MediunCardsService } from '../shared/service/mediun-cards.service';
import { MinCardsService } from '../shared/service/min-cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  minCards = []
  cards = [];
  contentCards = []
  mediunCards = []
  mediunCardsArea = []

  text = "Você faz parte do grupo de pessoas que ainda podem desenvolver sua comunicação como uma ferramenta poderosa na sua vida social. Você ainda tem certa dificuldade de expressar suas ideias e emoções com clareza e objetividade, adaptar sua fala ao contexto social de cada situação, além de compreender e ser facilmente compreendido pelos outros. Vamos aprender como desenvolver essas habilidades?"
  text2 = "Você tem dificuldade de expressar suas ideias e opiniões de forma clara e precisa. Isso acontece porque você geralmente não consegue se manter presente nas conversas, prestando atenção tanto nos seus próprios pensamentos, quanto no que acontece ao seu redor. É comum você se sentir no piloto automático, como se não fosse o dono das suas próprias palavras."
  
  constructor(
    private cardService: CardService,
    private minCardService: MinCardsService,
    private contentCardService: ContentCardsService,
    private mediunCardsService: MediunCardsService,
    private mediunCardsAreaService: MediunCardsAreaService,
  ) { }

  ngOnInit(): void {
    this.getCards();
    this.getMinCards();
    this.getcontentCards();
    this.getmediunCards();
    this.getmediunCardsArea();
  }

  setSelected(item: any){
    this.clearItemsSelected();
    item.selected = !item.selected;
  }

  clearItemsSelected(){
    for(let item of this.minCards){
      item.selected = false;
    }
  }

  getCards(){
    this.cardService.getAll().subscribe(res => this.cards = res, err => console.log("Err:: ", err))
  }

  getMinCards(){
    this.minCardService.getAll().subscribe(res => this.minCards = res, err => console.log("Err:: ", err))
  }

  getcontentCards(){
    this.contentCardService.getAll().subscribe(res => this.contentCards = res, err => console.log("Err:: ", err))
  }

  getmediunCards(){
    this.mediunCardsService.getAll().subscribe(res => this.mediunCards = res, err => console.log("Err:: ", err))
  }

  getmediunCardsArea(){
    this.mediunCardsAreaService.getAll().subscribe(res => this.mediunCardsArea = res, err => console.log("Err:: ", err))
  }

}
