import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionOfClassificationComponent } from './option-of-classification.component';

describe('OptionOfClassificationComponent', () => {
  let component: OptionOfClassificationComponent;
  let fixture: ComponentFixture<OptionOfClassificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionOfClassificationComponent]
    });
    fixture = TestBed.createComponent(OptionOfClassificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
