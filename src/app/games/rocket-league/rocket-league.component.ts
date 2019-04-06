import { Component, OnInit } from '@angular/core';
import {Member} from '../member.model';

@Component({
  selector: 'app-rocket-league',
  templateUrl: './rocket-league.component.html',
  styleUrls: ['./rocket-league.component.sass']
})
export class RocketLeagueComponent implements OnInit {
  members: Member[] = [
    new Member(
      '../../../assets/image/player/rocket league/dinouh.png'
      , 'Dino B.'
      , 'Dinouh'
      , ''
      , 'https://twitter.com/DinouhRL'
      , ''
      , ''
      , 'https://twitch.tv/Dinouh'
      , ''
      , ''
      , true
      , false
      , false
      , false
    ),
    new Member(
      '../../../assets/image/player/rocket league/wink.png'
      , 'Lewis B.'
      , 'Wink'
      , ''
      , 'https://twitter.com/WinkRL'
      , ''
      , ''
      , 'https://twitch.tv/thewink47'
      , 'https://t.co/mw4Yzri0XD'
      , ''
      , true
      , false
      , false
      , false
    ),
    new Member(
      '../../../assets/image/player/rocket league/texo.png'
      , 'Amir M.'
      , 'Texo'
      , ''
      , 'https://twitter.com/RLTexo'
      , ''
      , 'https://t.co/LhlIUViSt8'
      , 'https://twitch.tv/texo_rl'
      , ''
      , ''
      , true
      , false
      , false
      , false
    ),
    new Member(
      '../../../assets/image/player/rocket league/linos.png'
      , 'Linus B.'
      , 'Linos'
      , ''
      , 'https://twitter.com/lin0s_'
      , ''
      , ''
      , 'https://twitch.tv/lin0s_'
      , ''
      , ''
      , true
      , false
      , false
      , false
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
