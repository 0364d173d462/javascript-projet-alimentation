import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuillesPage } from './feuilles.page';

describe('FeuillesPage', () => {
  let component: FeuillesPage;
  let fixture: ComponentFixture<FeuillesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuillesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuillesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
