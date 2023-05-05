import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-members-card',
  templateUrl: './members-card.component.html',
  styleUrls: ['./members-card.component.scss']
})
export class MembersCardComponent implements OnInit {

  @Input() icon:string=""
  @Input() number:string=""
  @Input() text:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
