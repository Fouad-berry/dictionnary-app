import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionnaireComponent } from './dictionnaire.component';

describe('DictionnaireComponent', () => {
  let component: DictionnaireComponent;
  let fixture: ComponentFixture<DictionnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DictionnaireComponent]
    });
    fixture = TestBed.createComponent(DictionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
