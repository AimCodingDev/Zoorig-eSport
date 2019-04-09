import { Component, OnInit } from '@angular/core';
import {Member} from '../../model/member.model';

@Component({
  selector: 'app-super-smash-bros',
  templateUrl: './super-smash-bros.component.html',
  styleUrls: ['./super-smash-bros.component.sass']
})
export class SuperSmashBrosComponent implements OnInit {
  members: Member[] = [
    new Member(
      '../../../assets/image/player/Super smash Bros Ultimate/XCloud.jpg'
      , 'Alex S.'
      , 'XCLOUD'
      , ''
      , 'https://twitter.com/XcloudSSB'
      , ''
      , ''
      , ''
      , ''
      , ''
      , false
      , false
      , true
      , false
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
