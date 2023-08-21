import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResaultComponent } from './resault.component';

describe('ResaultComponent', () => {
  let component: ResaultComponent;
  let fixture: ComponentFixture<ResaultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResaultComponent]
    });
    fixture = TestBed.createComponent(ResaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
