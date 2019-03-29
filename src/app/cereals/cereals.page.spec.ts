import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';


import {AidePage} from './aide.page';

describe('cereals', () => {
    let component:  CerealsPage;
    let fixture: AideFixture<CerealsPage>;
    let CerealsPage: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ CerealsPage ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(async () => {
        fixture = await TestBed.createComponent(CerealsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
