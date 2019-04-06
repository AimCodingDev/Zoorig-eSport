import { Component, OnInit } from '@angular/core';
import {Member} from '../member.model';

@Component({
  selector: 'app-fifa',
  templateUrl: './fifa.component.html',
  styleUrls: ['./fifa.component.sass']
})
export class FifaComponent implements OnInit {
  members: Member[] = [
    new Member(
      '../../../assets/image/player/fifa/Mr.Black.jpeg'
      , 'Raphael R.'
      , 'Mr. Black'
      , ''
      , 'https://twitter.com/ZRG_Black'
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
      '../../../assets/image/player/fifa/DayDinho.jpeg'
      , 'Davide L.'
      , 'DayDinho'
      , ''
      , 'https://twitter.com/eDayDinho'
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
      '../../../assets/image/player/fifa/Twistahh.jpeg'
      , 'Yasin K.'
      , 'Twinstahh'
      , ''
      , 'https://twitter.com/TwisTah7'
      , ''
      , ''
      , ''
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
