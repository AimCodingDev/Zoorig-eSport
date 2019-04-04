import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  public href = '';
  public x = this.router.isActive('/games', false);

  constructor(private router: Router) {}

  ngAfterContentChecked() {
    this.href = this.router.url;
    console.log(this.router.url);
  }

  ngOnInit() {
  }

}
