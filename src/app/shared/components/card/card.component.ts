import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() id: string = '';
  @Input() title: string = '';
  @Input() time: string = '';
  @Input() titleCard: string = '';
  @Input() status: string = '';
  @Input() statusText: string = '';
  @Input() icon: string = '';
  @Input() background: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
