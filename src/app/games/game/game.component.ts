import { Component, OnInit } from '@angular/core';
import {SliderModel} from '../../model/slider.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.sass']
})
export class GameComponent implements OnInit {
  public classNameCheck = '';

  sliderModels: SliderModel[] = [
    new SliderModel(
      ''
      , 'class_1'
      , '/games/rocket-league'
      , '../../../assets/image/games/rocket-league.jpg'
    ),
    new SliderModel(
      ''
      , 'class_2'
      , '/games/fortnite'
      , '../../../assets/image/games/fortnite.jpg'
    ),
    new SliderModel(
      ''
      , 'class_3'
      , '/games/super-smash-bros'
      , '../../../assets/image/games/Super-Smash-Bros-Ultimate.jpg'
    ),
    new SliderModel(
      ''
      , 'class_4'
      , '/games/call-of-duty'
      , '../../../assets/image/games/call-of-duty-black-ops-4.png'
    ),
    new SliderModel(
      ''
      , 'class_5'
      , '/games/fifa'
      , '../../../assets/image/games/fifa-19.jpg'
    )
  ];

  constructor() { }

  ngOnInit() {
  }

}
