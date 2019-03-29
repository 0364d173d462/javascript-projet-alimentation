import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegumesPage } from './legumes.page';

describe('LegumesPage', () => {
  let component: LegumesPage;
  let fixture: ComponentFixture<LegumesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegumesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegumesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
