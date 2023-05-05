import { Injectable } from '@angular/core';

export interface Marketing{
  photo?:string;
  info?:string;
  text?:string;
  icon?:string;
}

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  marketing=[
    {
      photo:"/assets/photo-marketing-a.png",
      info:"Creating Streamlined Safeguarding Processes with OneRen",
      text:"Readmore",
      icon:"/assets/icon-right-green.png"
    },
    {
      photo:"/assets/photo-marketing-b.png",
      info:"What are your safeguarding responsibilities and how can you manage them?",
      text:"Readmore",
      icon:"/assets/icon-right-green.png"
    },
    {
      photo:"/assets/photo-marketing-c.png",
      info:"Revamping the Membership Model with Triathlon Australia",
      text:"Readmore",
      icon:"/assets/icon-right-green.png"
    }
  ]

  constructor() { }
}
