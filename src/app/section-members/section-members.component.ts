import { Component, OnInit } from '@angular/core';
import { MembersService } from '../services/members.service';

@Component({
  selector: 'app-section-members',
  templateUrl: './section-members.component.html',
  styleUrls: ['./section-members.component.scss']
})
export class SectionMembersComponent implements OnInit {

  constructor(
    public membersService:MembersService,
  ) { }

  ngOnInit(): void {
  }

}
