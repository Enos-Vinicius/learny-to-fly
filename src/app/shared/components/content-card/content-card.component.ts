import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() title: any;
  @Input() subtitle: any;
  @Input() icon: any;
  constructor() { }

  ngOnInit(): void {
  }

}
