import { Component, OnInit } from '@angular/core';
import { CommunityService } from 'src/app/services/community.service';
import { MarketingService } from 'src/app/services/marketing.service';

@Component({
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  clients=['/assets/client-a.png','/assets/client-b.png','/assets/client-c.png','/assets/client-d.png','/assets/client-e.png','/assets/client-f.png','/assets/client-g.png']

  constructor(
    public communityService:CommunityService,
    public marketingService:MarketingService,
  ) { }

  ngOnInit(): void {
  }

}
