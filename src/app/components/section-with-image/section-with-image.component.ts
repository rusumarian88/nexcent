import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-with-image',
  templateUrl: './section-with-image.component.html',
  styleUrls: ['./section-with-image.component.scss']
})
export class SectionWithImageComponent implements OnInit {

  @Input() image:string=""
  @Input() title:string=""
  @Input() description:string=""

  constructor() { }

  ngOnInit(): void {
  }

}
