import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JSonComponent } from './j-son.component';

describe('JSonComponent', () => {
  let component: JSonComponent;
  let fixture: ComponentFixture<JSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JSonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
