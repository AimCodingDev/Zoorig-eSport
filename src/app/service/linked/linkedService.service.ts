import {AfterContentChecked, Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LinkedServiceService implements AfterContentChecked {
  public href = '';

  constructor(private router: Router) {}

  ngAfterContentChecked() {
    this.href = this.router.url;
    console.log(this.router.url);
  }
}
