import { Component, OnInit } from '@angular/core';
import {Member} from '../model/member.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  members: Member[] = [
    new Member(
      'src/assets/image/new_logo_2.jpg'
      , 'Zoorig eSport'
      , 'ZRG'
      , 'https://www.facebook.com/zoorigesport/'
      , 'https://twitter.com/Zoorig_eSport'
      , 'https://instagram.com/zoorig.eSport/'
      , ''
      , 'https://www.twitch.tv/zoorigesport'
      , 'https://www.youtube.com/channel/UCgUP1TYGLz69GQqfb8nlVcQ'
      , 'mailto:info@zoorig-esport.com'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
