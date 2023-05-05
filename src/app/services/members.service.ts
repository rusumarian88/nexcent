import { Injectable } from '@angular/core';

export interface Member{
  icon?:string;
  number?:string;
  text?:string;
}

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  members=[
    {
      icon:"/assets/icon-members-a.png",
      number:"2,245,341",
      text:"Members"
    },
    {
      icon:"/assets/icon-members-b.png",
      number:"46,328",
      text:"Clubs"
    },
    {
      icon:"/assets/icon-members-c.png",
      number:"828,867",
      text:"Event Bookings"
    },
    {
      icon:"/assets/icon-members-d.png",
      number:"1,926,436",
      text:"Payments"
    }
  ]

  constructor() { }
}
