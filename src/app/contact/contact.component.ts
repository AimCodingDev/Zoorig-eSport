import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  log(x) { console.log(x); }


  constructor() { }

  ngOnInit() {
  }
}
