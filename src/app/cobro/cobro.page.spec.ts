import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CobroPage } from './cobro.page';

describe('CobroPage', () => {
  let component: CobroPage;
  let fixture: ComponentFixture<CobroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CobroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CobroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
