import { Component, OnInit } from '@angular/core';
import {Member} from '../member.model';

@Component({
  selector: 'app-fortnite',
  templateUrl: './fortnite.component.html',
  styleUrls: ['./fortnite.component.sass']
})
export class FortniteComponent implements OnInit {
  members: Member[] = [
    new Member(
      '../../../assets/image/player/fortnite/dimension240.jpeg'
      , 'Leon F.'
      , 'Dimension240'
      , ''
      , 'https://twitter.com/DiMeNsioN240'
      , ''
      , ''
      , 'https://twitch.tv/dimension240'
      , ''
      , ''
      , true
      , false
      , false
      , true
    ),
    new Member(
      '../../../assets/image/player/fortnite/Don Ferox.jpeg'
      , 'Davide L.'
      , 'Don Ferox'
      , ''
      , 'https://twitter.com/Donferoxofficial'
      , ''
      , ''
      , 'https://twitch.tv/donferox'
      , ''
      , ''
      , true
      , false
      , false
      , false
    ),
    new Member(
      '../../../assets/image/player/fortnite/zmxmo.jpeg'
      , 'Mohamed A.'
      , 'zmxmo'
      , ''
      , ''
      , ''
      , ''
      , ''
      , ''
      , ''
      , true
      , false
      , false
      , false
    ),
    new Member(
      '../../../assets/image/player/fortnite/madtalent.jpeg'
      , 'Valent T.'
      , 'MadTalent'
      , ''
      , 'https://twitter.com/X2Hiigh4You'
      , ''
      , ''
      , 'https://twitch.tv/zrg_madtalent'
      , ''
      , ''
      , true
      , false
      , false
      , false
    ),
    new Member(
      '../../../assets/image/player/fortnite/stizzle.jpg'
      , 'Liam J.'
      , 'Stizzle'
      , ''
      , 'https://twitter.com/ZoorigStizzle'
      , ''
      , ''
      , 'https://twitch.tv/zoorig_stizzle'
      , ''
      , ''
      , false
      , false
      , false
      , true
    ),
    new Member(
      '../../../assets/image/player/fortnite/ALe BTW..png'
      , 'Alessandro F.'
      , 'ALe BTW.'
      , ''
      , 'https://twitter.com/EajerTh'
      , ''
      , ''
      , ''
      , 'https://www.youtube.com/channel/UCR9yGC9T-088oA0L0SnDpCA'
      , ''
      , false
      , false
      , false
      , true
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
