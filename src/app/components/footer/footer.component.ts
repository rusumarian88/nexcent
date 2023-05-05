import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  icons=['/assets/icon-insta.png','/assets/icon-brw.png','/assets/icon-twt.png','/assets/icon-yt.png']

  constructor() { }

  ngOnInit(): void {
  }

}
