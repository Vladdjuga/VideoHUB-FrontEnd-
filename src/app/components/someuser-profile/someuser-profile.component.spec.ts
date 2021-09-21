/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SomeuserProfileComponent } from './someuser-profile.component';

describe('SomeuserProfileComponent', () => {
  let component: SomeuserProfileComponent;
  let fixture: ComponentFixture<SomeuserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeuserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeuserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
