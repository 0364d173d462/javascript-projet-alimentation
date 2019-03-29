import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsPage } from './fruits.page';

describe('FruitsPage', () => {
  let component: FruitsPage;
  let fixture: ComponentFixture<FruitsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
