import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-min-card',
  templateUrl: './min-card.component.html',
  styleUrls: ['./min-card.component.scss']
})
export class MinCardComponent implements OnInit {
  @Input() title: any;
  @Input() icon: any;
  @Input() background: any;
  @Input() selected: any;
  constructor() { }

  ngOnInit(): void {    
  }

}
