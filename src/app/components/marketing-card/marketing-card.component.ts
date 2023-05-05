import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-card',
  templateUrl: './marketing-card.component.html',
  styleUrls: ['./marketing-card.component.scss']
})
export class MarketingCardComponent implements OnInit {

  @Input() photo:string=""
  @Input() info:string=""
  @Input() text:string=""
  @Input() icon:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
