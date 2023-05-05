import { Injectable } from '@angular/core';

export interface Community{
  icon?:string;
  title?:string;
  description?:string;
}

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  community=[
    {
      icon:"/assets/icon-community-a.png",
      title:"Membership Organisations",
      description:"Our membership management software provides full automation of membership renewals and payments"
    },
    {
      icon:"/assets/icon-community-b.png",
      title:"National Associations",
      description:"Our membership management software provides full automation of membership renewals and payments"
    }, 
    {
      icon:"/assets/icon-community-c.png",
      title:"Clubs And Groups",
      description:"Our membership management software provides full automation of membership renewals and payments"
    }
  ]

  constructor() { }
}
