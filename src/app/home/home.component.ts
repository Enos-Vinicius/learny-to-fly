import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  minCards = [
    {icon: "sun-line", title: "Clareza", background: "green_clarity", selected: true},
    {icon: "target",   title: "Objetividade", background: "green_objectivity", selected: false},
    {icon: "heart",    title: "Compreensão", background: "green_understanding", selected: false},
  ]

  cards = [
    {id: 1, status: "success", time: "2 minutos", title: "Descubra mais sobre você", titleCard: "Minha comunicação é clara?", statusText: "Identificar", background: "url(./assets/images/bg-card.png)"},
    {id: 2, status: "stage-2", time: "4 minutos", title: "Desenvolva suas habilidades", titleCard: "Comunicação consciente", statusText: "Aprender", background: ""},
    {id: 3, status: "closed", time: "10 minutos", title: "", titleCard: "10 práticas para uma boa comunicação", statusText: "Praticar", background: ""},
    {id: 3, status: "closed", time: "2 minutos", title: "", titleCard: "4 regras da boa comunicação", statusText: "Mapear", background: ""},
  ]

  contentCards = [
    {id: 1, icon: "book",  title: "What Your Most Vivid Memories Say About You", subtitle: "Even when we believe that we’ve created a happy, ideal life for…"},
    {id: 2, icon: "movie", title: "What Your Most Vivid Memories Say About You", subtitle: "Even when we believe that we’ve created a happy, ideal life for…"},
    {id: 3, icon: "world", title: "What Your Most Vivid Memories Say About You", subtitle: "Even when we believe that we’ve created a happy, ideal life for…"},
  ]

  mediunCards = [
    {id: 1, numberCard: "1", circleColor: "#00A79D", background: "linear-gradient(45deg, #33B8B0 0%, #5FECB4 100%)", textColor: "#FFF", title: "Objetividade", subtitle: "Se expressar de forma objetiva e firme."},
    {id: 2, numberCard: "2", circleColor: "#5AD3A0", background: "linear-gradient(45deg, #33B8B0 0%, #5FECB4 100%)", textColor: "#FFF", title: "Compreensão", subtitle: "Compreender e ser compreendido de maneira precisa pelas pessoas."},
  ]

  mediunCardsArea = [
    {id: 1, numberCard: "1", circleColor: "#00A79D", background: "", textColor: "#000", title: "Clareza", subtitle: "Se expressar de forma objetiva e firme.", borderColor: "1px solid #D7D7D7"}
  ]
  constructor() { }

  ngOnInit(): void {
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
}
