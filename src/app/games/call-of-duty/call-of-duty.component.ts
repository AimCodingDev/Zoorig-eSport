import {Component, OnInit} from '@angular/core';
import {Member} from '../member.model';

@Component({
  selector: 'app-call-of-duty',
  templateUrl: './call-of-duty.component.html',
  styleUrls: ['./call-of-duty.component.sass']
})
export class CallOfDutyComponent implements OnInit {
  members: Member[] = [
    new Member(
      '../../../assets/image/player/call of duty/karuma.jpg'
      , 'Jon R.'
      , 'Karuma'
      , ''
      , 'https://twitter.com/KarumaEU'
      , ''
      , ''
      , 'https://twitch.tv/twitch_karuma'
      , ''
      , ''
      , false
      , false
      , false
      , true
    ),
    new Member(
      '../../../assets/image/player/call of duty/reiskout.jpg'
      , 'Drilon R.'
      , 'Reiskout'
      , ''
      , 'https://twitter.com/RReiskout'
      , ''
      , ''
      , ''
      , 'https://www.youtube.com/channel/UCbV2cPVuFornego7u8Nxtfg'
      , ''
      , false
      , false
      , false
      , true
    ),
    new Member(
      '../../../assets/image/player/call of duty/kkencey.jpg'
      , 'Kevin K.'
      , 'Kkencey'
      , ''
      , 'https://twitter.com/Kkencey_'
      , ''
      , ''
      , ''
      , ''
      , ''
      , false
      , false
      , false
      , true
    ),
    new Member(
      '../../../assets/image/player/call of duty/arcadis.jpg'
      , 'Chakkraphop Z.'
      , 'Arcadis'
      , ''
      , 'https://twitter.com/7Arcadis'
      , ''
      , ''
      , ''
      , ''
      , ''
      , false
      , false
      , false
      , true
    ),
    new Member(
      '../../../assets/image/player/call of duty/camorra.jpg'
      , 'Julio B.'
      , 'CAMORRA'
      , ''
      , 'https://twitter.com/CamorraCOD'
      , ''
      , ''
      , 'https://https://t.co/vwM2mHAz5d'
      , ''
      , ''
      , true
      , false
      , false
      , false
    ),
    new Member(
      '../../../assets/image/player/call of duty/default.jpg'
      , 'Marco R.'
      , 'FIINZ'
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
      '../../../assets/image/player/call of duty/default.jpg'
      , 'Albi A.'
      , 'NOSTRA'
      , ''
      , 'https://twitter.com/oNostra_'
      , ''
      , ''
      , ''
      , 'https://https://t.co/AWsSIgOiSe'
      , ''
      , true
      , false
      , false
      , false
    )
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
