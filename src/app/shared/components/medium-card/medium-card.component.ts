import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-card',
  templateUrl: './medium-card.component.html',
  styleUrls: ['./medium-card.component.scss']
})
export class MediumCardComponent implements OnInit {
  @Input() circleColor: string = '';
  @Input() background: string = '';
  @Input() textColor: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() borderColor: string = '';
  @Input() numberCard: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
