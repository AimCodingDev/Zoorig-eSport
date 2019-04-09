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
      ''
      , ''
      , ''
      , ''
      , ''
      , ''
      , ''
      , ''
      , ''
      , ''
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
