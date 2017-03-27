/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TicketItemComponent } from './ticket-item.component';

describe('TicketItemComponent', () => {
  let component: TicketItemComponent;
  let fixture: ComponentFixture<TicketItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
