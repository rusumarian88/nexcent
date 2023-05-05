import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-reviews',
  templateUrl: './section-reviews.component.html',
  styleUrls: ['./section-reviews.component.scss']
})
export class SectionReviewsComponent implements OnInit {

  customers=['/assets/icon-rew-a.png','/assets/icon-rew-b.png','/assets/icon-rew-c.png','/assets/icon-rew-d.png','/assets/icon-rew-e.png','/assets/icon-rew-f.png']

  constructor() { }

  ngOnInit(): void {
  }

}
