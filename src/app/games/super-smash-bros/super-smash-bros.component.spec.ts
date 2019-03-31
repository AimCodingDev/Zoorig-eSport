import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSmashBrosComponent } from './super-smash-bros.component';

describe('SuperSmashBrosComponent', () => {
  let component: SuperSmashBrosComponent;
  let fixture: ComponentFixture<SuperSmashBrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperSmashBrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperSmashBrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
