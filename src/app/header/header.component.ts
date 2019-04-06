import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  public href = '';
  public hrefChildren = '';

  constructor(private router: Router) {}

  ngAfterContentChecked() {
    this.href = this.router.url.split('/')[1];
    this.hrefChildren = this.router.url.split('/')[2];
  }

  ngOnInit() {
  }

}
