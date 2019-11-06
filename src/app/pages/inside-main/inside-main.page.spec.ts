import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsideMainPage } from './inside-main.page';

describe('InsideMainPage', () => {
  let component: InsideMainPage;
  let fixture: ComponentFixture<InsideMainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsideMainPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsideMainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
